import type { MDXComponents } from "mdx/types";
import { withBase } from "./src/lib/with-base";

const base = import.meta.env.BASE_URL;

const resolveMdxImageSrc = (src: string | undefined) => {
  if (!src || !src.startsWith("/")) {
    return src;
  }

  return withBase(base, src);
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ className, ...props }) => (
      <pre
        className={`${className} overflow-x-auto rounded-md px-4 py-3`}
        {...props}
      />
    ),
    "pre.code": ({ className, ...props }) => (
      <code className={`${className} text-white`} {...props} />
    ),
    img: ({ src, ...props }) => (
      <img
        alt=""
        src={resolveMdxImageSrc(typeof src === "string" ? src : undefined)}
        {...props}
      />
    ),
    ...components,
  };
}
