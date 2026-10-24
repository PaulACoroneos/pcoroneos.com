import { test, expect, type Page } from "@playwright/test";

const html = (page: Page) => page.locator("html");
const themeToggle = (page: Page) =>
  page.getByRole("button", { name: "Toggle dark mode" });
const navLink = (page: Page, name: string) =>
  page.locator("header nav").getByRole("link", { name, exact: true });

test.describe("Theme toggle", () => {
  test("toggles dark mode and stores the choice", async ({ page }) => {
    await page.goto("/");
    await expect(html(page)).not.toHaveClass(/dark/);

    await themeToggle(page).click();
    await expect(html(page)).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe(
      "dark",
    );

    await themeToggle(page).click();
    await expect(html(page)).not.toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe(
      "light",
    );
  });

  test("keeps the stored theme across reloads and client navigation", async ({
    page,
  }) => {
    await page.goto("/");
    await themeToggle(page).click();
    await expect(html(page)).toHaveClass(/dark/);

    await page.reload();
    await expect(html(page)).toHaveClass(/dark/);

    await navLink(page, "Blog").click();
    await expect(page).toHaveURL(/\/blog$/);
    await expect(html(page)).toHaveClass(/dark/);
  });

  test("follows the system preference when nothing is stored", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await expect(html(page)).toHaveClass(/dark/);
  });

  test("a stored light theme overrides a dark system preference", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.addInitScript(() => localStorage.setItem("theme", "light"));
    await page.goto("/");
    await expect(html(page)).not.toHaveClass(/dark/);
  });

  test("still toggles once per click after client navigation", async ({
    page,
  }) => {
    // Scripts re-run on every astro:page-load; a listener bound twice would
    // toggle twice per click and leave the theme unchanged.
    await page.goto("/");
    await navLink(page, "Blog").click();
    await expect(page).toHaveURL(/\/blog$/);
    await navLink(page, "About").click();
    await expect(page).toHaveURL(/\/about$/);

    await themeToggle(page).click();
    await expect(html(page)).toHaveClass(/dark/);
  });
});

test.describe("Leetcode filter", () => {
  test("filters solutions by title and resets when cleared", async ({
    page,
  }) => {
    await page.goto("/leetcode");
    const items = page.locator("[data-leetcode-item]");
    const total = await items.count();
    expect(total).toBeGreaterThan(1);

    const search = page.getByRole("textbox", { name: "Search Solutions" });
    await search.fill("two sum");
    await expect(items.locator("visible=true")).toHaveCount(1);
    await expect(
      page.getByRole("heading", { name: "Two Sum", exact: false }),
    ).toBeVisible();

    await search.fill("no solution has this title");
    await expect(items.locator("visible=true")).toHaveCount(0);

    await search.fill("");
    await expect(items.locator("visible=true")).toHaveCount(total);
  });

  test("works after arriving via client navigation", async ({ page }) => {
    await page.goto("/");
    await navLink(page, "Leetcode").click();
    await expect(page).toHaveURL(/\/leetcode$/);

    await page
      .getByRole("textbox", { name: "Search Solutions" })
      .fill("two sum");
    await expect(
      page.locator("[data-leetcode-item]").locator("visible=true"),
    ).toHaveCount(1);
  });
});

test.describe("Portfolio filter", () => {
  // Filtering logic is unit tested; this checks the island hydrates.
  test("hydrates and filters projects", async ({ page }) => {
    await page.goto("/portfolio");
    const cards = page.getByRole("heading", { level: 2 });
    const total = await cards.count();

    const python = page.getByRole("button", { name: "Python" });
    await python.click();
    await expect(python).toHaveAttribute("aria-pressed", "true");
    await expect(cards).not.toHaveCount(total);
    await expect(page.getByRole("heading", { name: "Bookbot" })).toBeVisible();
  });
});
