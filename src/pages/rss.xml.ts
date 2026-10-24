import type { APIRoute } from "astro";
import { getAllPosts } from "../lib/posts";
import { buildRssXml } from "../lib/rss";

export const GET: APIRoute = () => {
  const cacheMaxAgeUntilStaleSeconds = 60 * 60;
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60;

  return new Response(buildRssXml(getAllPosts()), {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`,
    },
  });
};
