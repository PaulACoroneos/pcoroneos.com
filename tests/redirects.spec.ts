import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { redirects } from "../src/lib/redirects.mts";

const appDir = resolve(__dirname, "../app");

describe("redirects", () => {
  it.each(Object.entries(redirects))("%s -> %s points at a post", (_, to) => {
    expect(existsSync(resolve(appDir, `.${to}`, "page.mdx"))).toBe(true);
  });

  it("only uses absolute source paths", () => {
    for (const from of Object.keys(redirects)) {
      expect(from.startsWith("/")).toBe(true);
    }
  });
});
