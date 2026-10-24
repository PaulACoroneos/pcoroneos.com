import AxeBuilder from "@axe-core/playwright";
import { test, expect, type Page } from "@playwright/test";

// One page of each template, plus a post with code blocks and the 404 page.
const paths = [
  "/",
  "/blog",
  "/leetcode",
  "/portfolio",
  "/about",
  "/blog/leetcode/1-two-sum",
  "/does-not-exist",
];

const scan = async (page: Page) => {
  // Colors mid-transition (e.g. a button that was just pressed) would give
  // axe in-between values, so let running CSS transitions finish first.
  await page.mouse.move(0, 0);
  await page.evaluate(() =>
    Promise.all(
      document
        .getAnimations()
        .filter((animation) => animation instanceof CSSTransition)
        .map((animation) => animation.finished),
    ),
  );
  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  // List each failing node so the report says what to fix, not just a count.
  return violations.flatMap((violation) =>
    violation.nodes.map(
      (node) =>
        `${violation.id}: ${node.target.join(" ")} - ${node.failureSummary}`,
    ),
  );
};

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`Accessibility (${colorScheme})`, () => {
    test.use({ colorScheme });

    for (const path of paths) {
      test(`${path} has no WCAG A/AA violations`, async ({ page }) => {
        await page.goto(path);
        expect(await scan(page)).toEqual([]);
      });
    }

    test("open mobile menu has no WCAG A/AA violations", async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto("/");
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(
        page.getByRole("navigation", { name: "Mobile navigation" }),
      ).toBeVisible();
      expect(await scan(page)).toEqual([]);
    });

    test("selected portfolio filter has no WCAG A/AA violations", async ({
      page,
    }) => {
      await page.goto("/portfolio");
      await expect(page.locator("astro-island")).not.toHaveAttribute("ssr");
      await page.getByRole("button", { name: "Python" }).click();
      await expect(
        page.getByRole("button", { name: "Python" }),
      ).toHaveAttribute("aria-pressed", "true");
      expect(await scan(page)).toEqual([]);
    });
  });
}
