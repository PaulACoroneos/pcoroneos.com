import RSS from "rss";
import type { PostEntry } from "./post-parsing";

const siteUrl = "https://www.pcoroneos.com";

export const buildRssXml = (posts: PostEntry[]) => {
  const feed = new RSS({
    title: "Blog – Paul Coroneos",
    description: "Personal blog and portfolio for Paul Coroneos.",
    language: "en",
    copyright: `©${new Date().getFullYear()} Paul Coroneos`,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
  });

  posts.forEach(({ link, module: { meta } }) => {
    feed.item({
      author: "Paul Coroneos",
      title: meta.title,
      guid: link,
      url: `${siteUrl}${link}`,
      date: meta.date,
      categories: meta.tags ?? [],
      description: meta.description,
    });
  });

  return feed.xml();
};
