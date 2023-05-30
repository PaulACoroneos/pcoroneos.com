import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import remarkPrism from "remark-prism";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import PageTitle from "../../components/page-title";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";
import { FrontMatterData } from "../../types/types";

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

export default function PostPage({
  source,
  frontMatter,
}: {
  source: any;
  frontMatter: FrontMatterData;
}) {
  const router = useRouter();

  // const postIndex = posts.findIndex((post) => post.link === router.pathname);
  // const previous = posts[postIndex + 1];
  // const next = posts[postIndex - 1];

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
          {/* {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Article
                  </h2>
                  <div className="text-secondary hover:text-primary">
                    <Link href={next.link}>{next.title}</Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-secondary hover:text-primary">
                    <Link href={previous.link}>{previous.title}</Link>
                  </div>
                </div>
              )}
            </div>
          )} */}
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

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
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

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
