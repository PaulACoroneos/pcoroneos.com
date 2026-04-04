import RSS from "rss";
import type { APIRoute } from "astro";
import { getAllPosts } from "../lib/posts";

export const GET: APIRoute = () => {
  const feed = new RSS({
    title: "Blog – Paul Coroneos",
    description: "Personal blog and portfolio for Paul Coroneos.",
    language: "en",
    copyright: `©${new Date().getFullYear()} Paul Coroneos`,
    site_url: "https://www.pcoroneos.com",
    feed_url: "https://www.pcoroneos.com/rss.xml",
  });

  const posts = getAllPosts();
  posts.forEach(({ link, module: { meta } }) => {
    feed.item({
      author: "Paul Coroneos",
      title: meta.title,
      guid: link,
      url: `https://www.pcoroneos.com${link}`,
      date: meta.date,
      categories: meta.tags?.map((tag) => tag) ?? [],
      description: meta.description,
    });
  });

  const cacheMaxAgeUntilStaleSeconds = 60 * 60;
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60;

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`,
    },
  });
};
