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
