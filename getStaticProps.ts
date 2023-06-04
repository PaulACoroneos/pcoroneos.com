import getAllPostPreviews from "./getAllPostPreviews";
import { buildRss } from "./utils/generate-rss";

export async function getStaticProps() {
  const posts = getAllPostPreviews();

  buildRss(posts);

  return {
    props: {
      posts: posts?.map((post) => ({
        title: post?.module?.meta?.title ?? "",
        link: post?.link ?? "",
      })),
    },
  };
}
