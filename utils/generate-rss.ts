import fs from "fs";
import RSS from "rss";

const feed = new RSS({
  title: "Blog – Paul Coroneos",
  site_url: "https://pcoroneos.com",
  feed_url: "https://pcoroneos.com/feed.xml",
});

export const buildRss = async (posts: any) => {
  posts.forEach(({ link, module: { meta } }) => {
    feed.item({
      title: meta.title,
      guid: link,
      url: `https://pcoroneos.com${link}`,
      date: meta.date,
      description: meta.description,
      custom_elements: [].concat(
        meta.authors.map((author) => ({ author: [{ name: author.name }] }))
      ),
    });
  });

  fs.writeFileSync("./out/feed.xml", feed.xml({ indent: true }));
};
