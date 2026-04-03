import { describe, expect, it } from "vitest";
import { withBase } from "../src/lib/with-base";

describe("withBase", () => {
  it("returns the path unchanged when base is /", () => {
    expect(withBase("/", "/about")).toBe("/about");
  });

  it("prepends the base to the path", () => {
    expect(withBase("/mysite", "/about")).toBe("/mysite/about");
  });

  it("adds a leading slash to the path when missing", () => {
    expect(withBase("/", "about")).toBe("/about");
  });

  it("strips trailing slash from base before joining", () => {
    expect(withBase("/mysite/", "/about")).toBe("/mysite/about");
  });

  it("handles nested base path with absolute path", () => {
    expect(withBase("/blog", "/post/1")).toBe("/blog/post/1");
  });
});
