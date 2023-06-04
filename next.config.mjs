import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import remarkPrism from "remark-prism";
import nextMdx from "@next/mdx";
import path from "path";

const __dirname = path.resolve();

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkImages, remarkEmoji, remarkPrism],
    rehypePlugins: [],
  },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config, options) => {
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

    if (!options.dev && options.isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        entries["./scripts/build-rss.js"] = "./scripts/build-rss";
        return entries;
      };
    }

    return config;
  },
});
