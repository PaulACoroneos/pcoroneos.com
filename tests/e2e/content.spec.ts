import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { test, expect } from "@playwright/test";
import { redirects } from "../../src/lib/redirects.mts";
import { collectPageErrors } from "./console-errors";

const appDir = resolve(__dirname, "../../app");

// Every post route, derived from the MDX files the build turns into pages.
const postRoutes = readdirSync(resolve(appDir, "blog"), { recursive: true })
  .map(String)
  .filter((file) => file.endsWith("page.mdx"))
  .map((file) => `/blog/${file.replace(/\/?page\.mdx$/, "")}`)
  .sort();

test.describe("Blog posts", () => {
  for (const route of postRoutes) {
    test(`${route} renders`, async ({ page, request }) => {
      const errors = collectPageErrors(page);
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      const post = page.locator('[data-testid="blog-post"]');
      await expect(post).toBeVisible();
      await expect(post.getByRole("heading", { level: 1 })).not.toBeEmpty();
      await expect(page).toHaveTitle(/ - Paul Coroneos$/);

      const imageSources = await post
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.map(
            (img) =>
              (img as HTMLImageElement).currentSrc ||
              (img as HTMLImageElement).src,
          ),
        );
      for (const src of new Set(imageSources)) {
        if (!src.startsWith(new URL("/", page.url()).origin)) continue;
        const image = await request.get(src);
        expect(image.ok(), `image ${src}`).toBe(true);
      }

      expect(errors).toEqual([]);
    });
  }

  test("every post is listed on the blog index and in the RSS feed", async ({
    page,
    request,
  }) => {
    await page.goto("/blog");
    const indexLinks = await page
      .getByRole("link", { name: /^Read / })
      .evaluateAll((links) =>
        links.map((link) => new URL((link as HTMLAnchorElement).href).pathname),
      );
    expect([...indexLinks].sort()).toEqual(postRoutes);

    const feed = await (await request.get("/rss.xml")).text();
    const feedLinks = [...feed.matchAll(/<guid[^>]*>([^<]+)<\/guid>/g)].map(
      ([, guid]) => guid,
    );
    expect([...feedLinks].sort()).toEqual(postRoutes);
  });
});

test.describe("Redirects", () => {
  for (const [from, to] of Object.entries(redirects)) {
    test(`${from} redirects to ${to}`, async ({ page, baseURL }) => {
      // Concatenate rather than resolve so "//atoi" stays a path.
      await page.goto(`${baseURL}${encodeURI(from)}`);
      await page.waitForURL((url) => url.pathname === to);
      await expect(page.locator('[data-testid="blog-post"]')).toBeVisible();
    });
  }
});

test.describe("Page metadata", () => {
  test("home page has canonical, Open Graph and RSS links", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.pcoroneos.com/",
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "website",
    );
    await expect(
      page.locator('link[rel="alternate"][type="application/rss+xml"]'),
    ).toHaveAttribute("href", "/rss.xml");
  });

  test("posts are marked as articles with their own description", async ({
    page,
  }) => {
    await page.goto(postRoutes[0]);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`^https://www\\.pcoroneos\\.com${postRoutes[0]}/?$`),
    );
    await expect(page.locator('meta[name="description"]')).not.toHaveAttribute(
      "content",
      "A blog and portfolio by Paul Coroneos",
    );
  });
});
