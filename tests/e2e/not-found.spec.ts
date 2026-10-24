import { test, expect } from "@playwright/test";

test.describe("404 page", () => {
  test("unknown routes return 404 with the not-found page", async ({
    page,
  }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page).toHaveTitle("Page not found - Paul Coroneos");
    await expect(
      page.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeVisible();
    // The site chrome still renders so visitors can navigate away.
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeVisible();
  });

  test("unknown blog routes also get the not-found page", async ({ page }) => {
    const response = await page.goto("/blog/not-a-real-post");
    expect(response?.status()).toBe(404);
    await expect(page.getByTestId("not-found")).toBeVisible();
  });

  test("links back to the home page and the blog", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    const notFound = page.getByTestId("not-found");

    await notFound.getByRole("link", { name: "Browse the blog" }).click();
    await expect(page).toHaveURL(/\/blog$/);
    await expect(
      page.getByRole("heading", { name: "Latest Blog Posts" }),
    ).toBeVisible();

    await page.goto("/this-page-does-not-exist");
    await notFound.getByRole("link", { name: "Go home" }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});
