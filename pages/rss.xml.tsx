/**
 * This is a dynamic RSS feed rendered on the server with all blog posts
 * We use SSG with a cache of a few minutes instead of statically generating the file because we want
 * new blog posts and edits to automatically show up here
 */

import { GetServerSideProps } from "next";
import RSS from "rss";
import getAllPostPreviews from "../utilities/mdx";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const feed = new RSS({
    title: "Blog – Paul Coroneos",
    description: "Personal blog and portfolio for Paul Coroneos.",
    language: "en",
    copyright: `©${new Date().getFullYear()} Paul Coroneos`,
    site_url: "https://pcoroneos.com",
    feed_url: "https://pcoroneos.com/rss.xml",
  });

  const posts = getAllPostPreviews();
  posts.forEach(({ link, module: { meta } }) => {
    feed.item({
      author: "Paul Coroneos",
      title: meta.title,
      guid: link,
      url: `https://pcoroneos.com${link.slice(1)}`,
      date: meta.date,
      categories: meta.tags?.map((tag) => tag) ?? [],
      description: meta.description,
    });
  });

  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.xml());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function RssPage() {}
