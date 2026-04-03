import { test, expect } from "@playwright/test";

test.describe("Site smoke tests", () => {
  test("home page loads and shows blog posts", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Paul Coroneos/);
    // Navigation links are visible (scoped to header nav)
    const nav = page.locator("header nav");
    await expect(
      nav.getByRole("link", { name: "Blog", exact: true })
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Leetcode", exact: true })
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Portfolio", exact: true })
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "About", exact: true })
    ).toBeVisible();
    // The page has a heading
    await expect(
      page.getByRole("heading", { name: "Latest Blog Posts" })
    ).toBeVisible();
  });

  test("blog index page loads", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog.*Paul Coroneos/);
    await expect(
      page.getByRole("heading", { name: "Latest Blog Posts" })
    ).toBeVisible();
  });

  test("about page loads", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/About.*Paul Coroneos/i);
    await expect(page.locator('[data-testid="blog-post"]')).toBeVisible();
  });

  test("leetcode page loads", async ({ page }) => {
    await page.goto("/leetcode");
    await expect(page).toHaveTitle(/Leetcode.*Paul Coroneos/i);
  });

  test("portfolio page loads", async ({ page }) => {
    await page.goto("/portfolio");
    await expect(page).toHaveTitle(/Portfolio.*Paul Coroneos/i);
  });

  test("navigating from home to blog works", async ({ page }) => {
    await page.goto("/");
    await page
      .locator("header nav")
      .getByRole("link", { name: "Blog", exact: true })
      .click();
    await expect(page).toHaveURL(/\/blog/);
    await expect(
      page.getByRole("heading", { name: "Latest Blog Posts" })
    ).toBeVisible();
  });

  test("clicking a blog post link goes to a post", async ({ page }) => {
    await page.goto("/blog");
    // Click the first "Read more" link
    const firstReadMore = page.getByRole("link", { name: /Read .+/ }).first();
    await firstReadMore.click();
    // Should be on a blog post page
    await expect(page.locator('[data-testid="blog-post"]')).toBeVisible();
  });

  test("RSS feed is available", async ({ page }) => {
    const response = await page.goto("/rss.xml");
    expect(response?.status()).toBe(200);
    const contentType = response?.headers()["content-type"] ?? "";
    expect(contentType).toMatch(/xml|rss/);
  });

  test("pages have no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    page.on("pageerror", (error) => {
      errors.push(`pageerror: ${error.message}`);
    });
    page.on("requestfailed", (request) => {
      const failure = request.failure();
      const reason = failure?.errorText ?? "unknown error";
      errors.push(`requestfailed: ${request.url()} - ${reason}`);
    });

    await page.goto("/");
    await page.goto("/blog");
    await page.goto("/about");

    expect(errors).toHaveLength(0);
  });
});
