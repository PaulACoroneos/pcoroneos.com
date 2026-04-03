import { defineConfig } from "vitest/config";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    exclude: [...configDefaults.exclude, "tests/e2e/**"],
  },
});
