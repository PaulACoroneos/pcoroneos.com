/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // --ignore-lock: Astro 7 detaches `astro preview` when run under an AI
    // coding agent (Playwright sees the server exit early) and refuses to start
    // if another preview holds the lock. This forces a one-off foreground server.
    command: process.env.CI
      ? "pnpm run start --ignore-lock"
      : "pnpm run build && pnpm run start --ignore-lock",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
