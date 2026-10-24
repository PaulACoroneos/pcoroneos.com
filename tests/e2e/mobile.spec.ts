import { test, expect, type Page } from "@playwright/test";
import { clientNavigate } from "./navigation";

test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

const menuButton = (page: Page) =>
  page.getByRole("button", { name: "Open menu" });
const closeButton = (page: Page) =>
  page.getByRole("button", { name: "Close menu" });
const mobileNav = (page: Page) =>
  page.getByRole("navigation", { name: "Mobile navigation" });

test.describe("Mobile navigation", () => {
  test("hides the desktop nav and shows the menu button", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeHidden();
    await expect(menuButton(page)).toBeVisible();
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "false");
    await expect(mobileNav(page)).toBeHidden();
  });

  test("opens and closes with the buttons, managing focus and scroll", async ({
    page,
  }) => {
    await page.goto("/");
    await menuButton(page).click();

    await expect(mobileNav(page)).toBeVisible();
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "true");
    await expect(closeButton(page)).toBeFocused();
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

    await closeButton(page).click();
    await expect(mobileNav(page)).toBeHidden();
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "false");
    await expect(menuButton(page)).toBeFocused();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  });

  test("closes on Escape", async ({ page }) => {
    await page.goto("/");
    await menuButton(page).click();
    await expect(mobileNav(page)).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(mobileNav(page)).toBeHidden();
    await expect(menuButton(page)).toBeFocused();
  });

  test("navigates and closes when a link is tapped", async ({ page }) => {
    await page.goto("/");
    await menuButton(page).click();
    await clientNavigate(
      page,
      mobileNav(page).getByRole("link", { name: "Leetcode", exact: true }),
    );

    await expect(page).toHaveURL(/\/leetcode$/);
    await expect(mobileNav(page)).toBeHidden();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");

    // The menu still works on the page reached by client navigation.
    await menuButton(page).click();
    await expect(mobileNav(page)).toBeVisible();
  });

  test("page content fits the viewport without horizontal scroll", async ({
    page,
  }) => {
    for (const path of ["/", "/blog", "/leetcode", "/portfolio", "/about"]) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, `${path} scrolls horizontally`).toBeLessThanOrEqual(0);
    }
  });
});
