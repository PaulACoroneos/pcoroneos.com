import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import remarkPrism from "remark-prism";
import Head from "next/head";
import path from "path";
import { POSTS_PATH } from "../utils/mdxUtils";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import PageTitle from "../components/page-title";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  pre: ({ className, ...props }) => (
    <pre
      className={`${className} rounded-md py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  "pre.code": ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

export default function AboutPage({ source, frontMatter }: any) {
  const router = useRouter();

  return (
    <article className="divide-y divide-gray-200" data-testid="blog-post">
      <Head>
        <title>{frontMatter.title} - Paul Coroneos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pacman326" />
        <meta name="twitter:creator" content="@pacman326" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta
          property="og:url"
          content={`https://pcoroneos.com${router.pathname}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
        {/* <meta
          property="og:image"
          content={`https://pcoroneos.com${meta.image}`}
        /> */}
      </Head>
      <header className="py-4">
        <div className="space-y-1 text-center">
          {frontMatter.date && (
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={frontMatter.date}>
                    {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
                  </time>
                </dd>
              </div>
            </dl>
          )}
          <div>
            <PageTitle>{frontMatter.title}</PageTitle>
          </div>
        </div>
      </header>
      <div style={{ gridTemplateRows: "auto 1fr" }}>
        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose py-8 px-2">
            <MDXRemote {...source} components={components} />
          </div>
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          <div className="pt-8">
            <Link href="/" className="text-secondary hover:text-primary">
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}

export const getStaticProps = async () => {
  const postFilePath = path.join(POSTS_PATH, "about.mdx");
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkImages, remarkEmoji, remarkPrism],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
