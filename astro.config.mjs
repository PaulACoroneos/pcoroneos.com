import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { unified } from "@astrojs/markdown-remark";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import tealSlateTheme from "./src/lib/shiki-theme.mjs";
import tailwindcss from "@tailwindcss/vite";
import { redirects } from "./src/lib/redirects.mts";

const site = "https://www.pcoroneos.com";

export default defineConfig({
  site,
  // Astro 7 defaults to JSX-style whitespace stripping ("jsx"), which drops
  // spaces between inline elements (e.g. "Published on" + <time>). Keep the
  // HTML-aware compression used before v7.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Workaround for @tailwindcss/vite@4.x incompatibility with rolldown (vite@8).
      // Without this, rolldown's BindingViteResolvePlugin receives `tsconfigPaths: undefined`
      // instead of a boolean, causing: "Missing field `tsconfigPaths` on BindingViteResolvePluginConfig"
      tsconfigPaths: false,
    },
  },
  markdown: {
    // Astro 7 defaults to the Sätteri processor, which doesn't run remark/rehype
    // plugins. Opt back into the unified pipeline so the plugins below keep working.
    // GFM is enabled by unified() by default, so remark-gfm isn't listed here.
    processor: unified({
      remarkPlugins: [remarkImages, remarkEmoji],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "append" }],
      ],
    }),
    shikiConfig: {
      theme: tealSlateTheme,
    },
  },
  redirects,
  integrations: [mdx(), react()],
});
