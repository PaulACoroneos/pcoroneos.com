import type { Locator, Page } from "@playwright/test";

// Clicks a link and resolves once Astro's client router has swapped the page
// and fired astro:page-load, so the new page's scripts are bound. The URL
// changes before that, so waiting on the URL alone races the scripts. Throws
// if the click causes a full page load instead of a client navigation.
export const clientNavigate = async (page: Page, link: Locator) => {
  const loaded = page.evaluate(
    () =>
      new Promise<void>((resolve) =>
        document.addEventListener("astro:page-load", () => resolve(), {
          once: true,
        }),
      ),
  );
  await link.click();
  await loaded;
};
