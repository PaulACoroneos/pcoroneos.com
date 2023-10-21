import Head from "next/head";
import PageTitle from "./page-title";
import Link from "next/link";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { format, parseISO } from "date-fns";

//TODO Paul. Figure out why I cant override code terminal bg color
const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre
      className={`${className} overflow-x-auto rounded-md px-4 py-3`}
      {...props}
    />
  ),
  "pre.code": ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

type PostProps = {
  meta: any;
  posts: any;
  children: React.ReactNode;
};

const Post = ({ meta, children, posts }: PostProps) => {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];

  return (
    <article className="divide-gray-200 divide-y" data-testid="blog-post">
      <Head>
        <title>{meta.title} - Paul Coroneos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pacman326" />
        <meta name="twitter:creator" content="@pacman326" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`https://pcoroneos.com${meta.image}`}
        />
        <meta
          property="og:url"
          content={`https://pcoroneos.com${router.pathname}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://pcoroneos.com${meta.image}`}
        />
      </Head>
      <header className="py-4">
        <div className="space-y-1 text-center">
          {meta.date && (
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-gray-500 text-base font-medium leading-6">
                  <time dateTime={meta.date}>
                    {format(parseISO(meta.date), "MMMM dd, yyyy")}
                  </time>
                </dd>
              </div>
            </dl>
          )}
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
      <div style={{ gridTemplateRows: "auto 1fr" }}>
        <div className="divide-gray-200 divide-y xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose px-2 py-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.discussion && (
            <div className="pb-16 pt-6">
              <p>
                Want to talk about this post?{" "}
                <a
                  href={meta.discussion}
                  className="font-medium text-secondary hover:text-primary"
                >
                  Discuss this on GitHub &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
        <footer className="divide-gray-200 divide-y text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-gray-500 text-xs uppercase tracking-wide">
                    Next Article
                  </h2>
                  <div className="text-secondary hover:text-primary">
                    <Link href={next.link}>{next.title}</Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-gray-500 text-xs uppercase tracking-wide">
                    Previous Article
                  </h2>
                  <div className="text-secondary hover:text-primary">
                    <Link href={previous.link}>{previous.title}</Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/" className="text-secondary hover:text-primary">
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Post;
