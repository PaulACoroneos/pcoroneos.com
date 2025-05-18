import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import nextMdx from "@next/mdx";
import path from "path";

const __dirname = path.resolve();

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkImages, remarkEmoji, remarkPrism,remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX({
  async redirects() {
    return [
      {
        source: "//atoi",
        destination: "/blog/atoi",
        permanent: true,
      },
      {
        source: "/climbing-stairs",
        destination: "/blog/climbing-stairs",
        permanent: true,
      },
      {
        source: "/cracking-the-code-interview-1-2",
        destination: "/blog/cracking-the-code-interview/1-2-check-permutations",
        permanent: true,
      },
      {
        source: "/cracking-the-code-interview-1-3-urlify",
        destination: "/blog/cracking-the-code-interview/1-3-urlify",
        permanent: true,
      },
      {
        source: "/cracking-the-code-interview-1-8-zero-matrix",
        destination: "/blog/cracking-the-code-interview/1-8-zero-matrix",
        permanent: true,
      },
      {
        source: "/cracking-the-code-interview-1-9-string-rotation",
        destination: "/blog/cracking-the-code-interview/1-9-string-rotation",
        permanent: true,
      },
      {
        source: "/ctci-is-unique",
        destination: "/blog/cracking-the-code-interview/1-1-is-unique",
        permanent: true,
      },
      {
        source: "/free-code-camp-no-repeats-please",
        destination: "/blog/free-code-camp/no-repeats-please",
        permanent: true,
      },
      {
        source: "/free-code-camp-pairwise",
        destination: "/blog/free-code-camp/pairwise",
        permanent: true,
      },
      {
        source: "/free-code-camp-symmetric-difference",
        destination: "/blog/free-code-camp/symmetric-difference",
        permanent: true,
      },
      {
        source: "/leetcode-27-remove-element",
        destination: "/blog/leetcode/27-remove-element",
        permanent: true,
      },
      {
        source: "/leetcode-88-merge-sorted-array",
        destination: "/blog/leetcode/88-merge-sorted-array",
        permanent: true,
      },
      {
        source: "/leetcode-111-minimum-depth-of-binary-tree",
        destination: "/blog/leetcode/111-minimum-depth-of-binary-tree",
        permanent: true,
      },
      {
        source: "/leetcode-121-best-time-to-buy-and-sell-stock",
        destination: "/blog/leetcode/121-best-time-to-buy-and-sell-stock",
        permanent: true,
      },
      {
        source: "/leetcode-141-linked-list-cycle",
        destination: "/blog/leetcode/141-linked-list-cycle",
        permanent: true,
      },
      {
        source: "/leetcode-203-remove-linked-list-elements",
        destination: "/blog/leetcode/203-remove-linked-list-elements",
        permanent: true,
      },
      {
        source: "/leetcode-206-reverse-linked-list",
        destination: "/blog/leetcode/206-reverse-linked-list",
        permanent: true,
      },
      {
        source: "/leetcode-485-max-consecutive-ones",
        destination: "/blog/leetcode/485-max-consecutive-ones",
        permanent: true,
      },
      {
        source: "/leetcode-1295-find-numbers-with-even-number-of-digits",
        destination:
          "/blog/leetcode/1295-find-numbers-with-even-number-of-digits",
        permanent: true,
      },
      {
        source: "/leetcode-two-sum",
        destination: "/blog/leetcode/1-two-sum",
        permanent: true,
      },
      {
        source: "/hello world",
        destination: "/blog/hello-world",
        permanent: true,
      },
      {
        source: "/climb-stairs",
        destination: "/blog/climbing-stairs",
        permanent: true,
      },
      {
        source: "/next-best-time",
        destination: "/blog/next-best-time",
        permanent: true,
      },
      { source: "/parse-int", destination: "/blog/parse-int", permanent: true },
      {
        source: "/role-table",
        destination: "/blog/role-table",
        permanent: true,
      },
      { source: "/stack", destination: "/blog/stack", permanent: true },
      {
        source: "/updating-bootcamp",
        destination: "/blog/updating-bootcamp",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        stream: false,
      },
    };

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [{ loader: path.resolve(__dirname, "scripts") + "/preview.js" }],
        },
        {
          use: [
            { loader: path.resolve(__dirname, "scripts") + "/add-imports.js" },
          ],
        },
      ],
    });

    return config;
  },
});
