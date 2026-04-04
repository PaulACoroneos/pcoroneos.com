import { extractExcerpt, normalizePostLink } from "./post-parsing";

type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  discussion?: string;
};

type PostModule = {
  default: unknown;
  meta: PostMeta;
};

export type PostEntry = {
  link: string;
  module: PostModule;
  excerpt: string;
};

const modules = import.meta.glob<PostModule>("../../app/blog/**/page.mdx", {
  eager: true,
});

const rawModules = import.meta.glob<string>("../../app/blog/**/page.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const getAllPosts = (): PostEntry[] => {
  return Object.entries(modules)
    .filter(([, module]) => Boolean(module.meta?.date))
    .map(([sourcePath, module]) => ({
      link: normalizePostLink(sourcePath),
      module,
      excerpt: extractExcerpt(
        rawModules[sourcePath] ?? "",
        module.meta?.description ?? "",
      ),
    }))
    .sort(
      (a, b) =>
        new Date(b.module.meta.date).getTime() -
        new Date(a.module.meta.date).getTime(),
    );
};

export const getPostBySlug = (slug: string[]) => {
  const path = `/blog/${slug.join("/")}`;
  return getAllPosts().find((post) => post.link === path);
};
