import type { Page } from "@playwright/test";

export const collectPageErrors = (page: Page) => {
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
    const reason = request.failure()?.errorText ?? "unknown error";
    // Requests still in flight when the test navigates away are aborted by
    // the browser; that isn't a page error.
    if (reason === "net::ERR_ABORTED") return;
    errors.push(`requestfailed: ${request.url()} - ${reason}`);
  });
  return errors;
};
