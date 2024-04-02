import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ className, ...props }) => (
      <pre
        className={`${className} overflow-x-auto rounded-md px-4 py-3`}
        {...props}
      />
    ),
    "pre.code": ({ className, ...props }) => (
      <code className={`${className} text-gray-200`} {...props} />
    ),
    ...components,
  };
}
