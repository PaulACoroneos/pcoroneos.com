import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPage = Boolean(owner) && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const githubSite = owner ? `https://${owner}.github.io` : "https://pcoroneos.com";
const base = isUserPage ? "/" : repo ? `/${repo}` : "/";

export default defineConfig({
  site: githubSite,
  base,
  redirects: {
    "//atoi": "/blog/atoi",
    "/climbing-stairs": "/blog/climbing-stairs",
    "/cracking-the-code-interview-1-2": "/blog/cracking-the-code-interview/1-2-check-permutations",
    "/cracking-the-code-interview-1-3-urlify": "/blog/cracking-the-code-interview/1-3-urlify",
    "/cracking-the-code-interview-1-8-zero-matrix": "/blog/cracking-the-code-interview/1-8-zero-matrix",
    "/cracking-the-code-interview-1-9-string-rotation": "/blog/cracking-the-code-interview/1-9-string-rotation",
    "/ctci-is-unique": "/blog/cracking-the-code-interview/1-1-is-unique",
    "/free-code-camp-no-repeats-please": "/blog/free-code-camp/no-repeats-please",
    "/free-code-camp-pairwise": "/blog/free-code-camp/pairwise",
    "/free-code-camp-symmetric-difference": "/blog/free-code-camp/symmetric-difference",
    "/leetcode-27-remove-element": "/blog/leetcode/27-remove-element",
    "/leetcode-88-merge-sorted-array": "/blog/leetcode/88-merge-sorted-array",
    "/leetcode-111-minimum-depth-of-binary-tree": "/blog/leetcode/111-minimum-depth-of-binary-tree",
    "/leetcode-121-best-time-to-buy-and-sell-stock": "/blog/leetcode/121-best-time-to-buy-and-sell-stock",
    "/leetcode-141-linked-list-cycle": "/blog/leetcode/141-linked-list-cycle",
    "/leetcode-203-remove-linked-list-elements": "/blog/leetcode/203-remove-linked-list-elements",
    "/leetcode-206-reverse-linked-list": "/blog/leetcode/206-reverse-linked-list",
    "/leetcode-485-max-consecutive-ones": "/blog/leetcode/485-max-consecutive-ones",
    "/leetcode-1295-find-numbers-with-even-number-of-digits": "/blog/leetcode/1295-find-numbers-with-even-number-of-digits",
    "/leetcode-two-sum": "/blog/leetcode/1-two-sum",
    "/hello world": "/blog/hello-world",
    "/climb-stairs": "/blog/climbing-stairs",
    "/next-best-time": "/blog/next-best-time",
    "/parse-int": "/blog/parse-int",
    "/role-table": "/blog/role-tab",
    "/stack": "/blog/stack",
    "/updating-bootcamp": "/blog/updating-bootcamp",
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkImages, remarkEmoji, remarkPrism, remarkGfm],
    }),
    react(),
  ],
});
