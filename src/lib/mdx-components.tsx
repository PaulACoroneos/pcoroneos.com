import type { MDXComponents } from "mdx/types";
import { withBase } from "./with-base";

const base = import.meta.env.BASE_URL;

const resolveMdxImageSrc = (src: string | undefined) => {
  if (!src || !src.startsWith("/")) {
    return src;
  }

  return withBase(base, src);
};

const mdxComponents: MDXComponents = {
  pre: ({ className, ...props }) => (
    <pre
      className={`${className ?? ""} overflow-x-auto rounded-md px-4 py-3`}
      {...props}
    />
  ),
  "pre.code": ({ className, ...props }) => (
    <code className={`${className ?? ""} text-white`} {...props} />
  ),
  img: ({ src, ...props }) => (
    <img
      src={resolveMdxImageSrc(typeof src === "string" ? src : undefined)}
      {...props}
    />
  ),
};

export default mdxComponents;
