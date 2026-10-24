import { describe, expect, it } from "vitest";
import { buildPostEntries } from "../src/lib/post-parsing";
import { buildRssXml } from "../src/lib/rss";

const posts = buildPostEntries(
  {
    "../../app/blog/leetcode/1-two-sum/page.mdx": {
      default: null,
      meta: {
        title: "Two Sum",
        description: "Solving two sum",
        date: "2020-05-01",
        tags: ["leetcode", "javascript"],
      },
    },
    "../../app/blog/hello-world/page.mdx": {
      default: null,
      meta: {
        title: "Hello World",
        description: "First post",
        date: "2019-01-01",
      },
    },
  },
  {},
);

const parse = (xml: string) => new DOMParser().parseFromString(xml, "text/xml");

describe("buildRssXml", () => {
  it("produces well-formed XML with one item per post", () => {
    const doc = parse(buildRssXml(posts));
    expect(doc.querySelector("parsererror")).toBeNull();
    expect(doc.querySelectorAll("item")).toHaveLength(2);
  });

  it("uses absolute post URLs and the route path as guid", () => {
    const [first] = parse(buildRssXml(posts)).querySelectorAll("item");
    expect(first.querySelector("title")?.textContent).toBe("Two Sum");
    expect(first.querySelector("link")?.textContent).toBe(
      "https://www.pcoroneos.com/blog/leetcode/1-two-sum",
    );
    expect(first.querySelector("guid")?.textContent).toBe(
      "/blog/leetcode/1-two-sum",
    );
  });

  it("maps tags to categories", () => {
    const items = parse(buildRssXml(posts)).querySelectorAll("item");
    const categories = (item: Element) =>
      Array.from(item.querySelectorAll("category")).map((c) => c.textContent);
    expect(categories(items[0])).toEqual(["leetcode", "javascript"]);
    expect(categories(items[1])).toEqual([]);
  });
});
