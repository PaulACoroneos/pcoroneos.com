import { describe, expect, it } from "vitest";
import { buildPostEntries, type PostModule } from "../src/lib/post-parsing";

const post = (title: string, date: string): PostModule => ({
  default: null,
  meta: { title, description: `${title} description`, date },
});

describe("buildPostEntries", () => {
  it("sorts posts newest first and builds route links", () => {
    const entries = buildPostEntries(
      {
        "../../app/blog/old/page.mdx": post("Old", "2019-01-01"),
        "../../app/blog/leetcode/new/page.mdx": post("New", "2024-06-01"),
        "../../app/blog/mid/page.mdx": post("Mid", "2021-03-15"),
      },
      {},
    );

    expect(entries.map((e) => e.link)).toEqual([
      "/blog/leetcode/new",
      "/blog/mid",
      "/blog/old",
    ]);
  });

  it("drops modules without a date", () => {
    const entries = buildPostEntries(
      {
        "../../app/blog/draft/page.mdx": {
          default: null,
          meta: { title: "Draft", description: "", date: "" },
        },
        "../../app/blog/live/page.mdx": post("Live", "2020-01-01"),
      },
      {},
    );

    expect(entries.map((e) => e.module.meta.title)).toEqual(["Live"]);
  });

  it("uses the raw source for the excerpt and falls back to the description", () => {
    const entries = buildPostEntries(
      {
        "../../app/blog/a/page.mdx": post("A", "2020-01-02"),
        "../../app/blog/b/page.mdx": post("B", "2020-01-01"),
      },
      { "../../app/blog/a/page.mdx": "# Heading\n\nFirst **paragraph**." },
    );

    expect(entries[0].excerpt).toBe("First paragraph.");
    expect(entries[1].excerpt).toBe("B description");
  });
});
