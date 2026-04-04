import { describe, expect, it } from "vitest";
import {
  extractExcerpt,
  normalizePostLink,
  stripFrontmatter,
} from "../src/lib/post-parsing";

describe("normalizePostLink", () => {
  it("converts legacy mdx source paths into route paths", () => {
    expect(
      normalizePostLink("../../app/blog/leetcode/1-two-sum/page.mdx"),
    ).toBe("/blog/leetcode/1-two-sum");
  });
});

describe("stripFrontmatter", () => {
  it("removes yaml frontmatter blocks", () => {
    const input = [
      "---",
      "title: Demo",
      "date: 2026-01-01",
      "---",
      "",
      "Body text",
    ].join("\n");

    expect(stripFrontmatter(input).trimStart()).toBe("Body text");
  });

  it("returns unchanged input when no frontmatter exists", () => {
    const input = "# Heading\n\nBody";
    expect(stripFrontmatter(input)).toBe(input);
  });
});

describe("extractExcerpt", () => {
  it("prefers content before the more marker and strips mdx metadata", () => {
    const input = [
      "---",
      "title: Sample",
      "---",
      "",
      "export const meta = { title: 'Sample' };",
      "import Something from './x';",
      "",
      "This [post](https://example.com) has **great** details.",
      "{/* more */}",
      "This part should never show.",
    ].join("\n");

    expect(extractExcerpt(input, "fallback")).toBe(
      "This post has great details.",
    );
  });

  it("skips headers, html blocks and code fences when finding preview text", () => {
    const input = [
      "# Heading",
      "",
      "<Callout>ignore this block</Callout>",
      "",
      "```ts",
      "const x = 1;",
      "```",
      "",
      "Useful summary sentence.",
    ].join("\n");

    expect(extractExcerpt(input, "fallback")).toBe("Useful summary sentence.");
  });

  it("falls back when all candidate text is empty", () => {
    const input = [
      "{/* excerpt */}",
      "{/* /excerpt */}",
      "<!--excerpt-->",
    ].join("\n");
    expect(extractExcerpt(input, "fallback text")).toBe("fallback text");
  });
});
