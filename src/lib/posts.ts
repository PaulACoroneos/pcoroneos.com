import { buildPostEntries, type PostModule } from "./post-parsing";

export type { PostEntry } from "./post-parsing";

const modules = import.meta.glob<PostModule>("../../app/blog/**/page.mdx", {
  eager: true,
});

const rawModules = import.meta.glob<string>("../../app/blog/**/page.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const getAllPosts = () => buildPostEntries(modules, rawModules);

export const getPostBySlug = (slug: string[]) => {
  const path = `/blog/${slug.join("/")}`;
  return getAllPosts().find((post) => post.link === path);
};
