import type { MDXComponents } from "mdx/types";

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
};

export default mdxComponents;
