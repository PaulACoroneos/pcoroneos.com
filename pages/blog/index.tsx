import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Head from "next/head";
import { format, parseISO } from "date-fns";

export default function Index({ posts }) {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pacman326" />
        <meta name="twitter:creator" content="@pacman326" />
        <meta name="twitter:title" content="Paul Coroneos" />
        <meta
          name="twitter:description"
          content="Personal blog and portfolio for Paul Coroneos."
        />
        <meta
          name="twitter:image"
          content="https://pcoroneos.com/paulcoroneos.jpg}"
        />
        <meta property="og:url" content="https://pcoroneos.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Paul Coroneos" />
        <meta
          property="og:description"
          content="Paul Coroneos developer personal web site."
        />
        <meta
          property="og:image"
          content="https://pcoroneos.com/paulcoroneos.jpg"
        />
        <title>Blog – Paul Coroneos</title>
      </Head>
      <div className="pt-4 md:pt-6 pb-4 md:pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog Posts
        </h1>
        <p
          className="text-lg leading-7 text-gray-500"
          data-testid="mostRecentPostDate"
        >
          Most recent post:{" "}
          {format(
            parseISO(
              posts.sort(
                (a, b) => parseISO(b.data.date) - parseISO(a.data.date)
              )[0].data.date
            ),
            "MMMM dd, yyyy"
          )}
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts
          .sort((a, b) => parseISO(b.data.date) - parseISO(a.data.date))
          .map((post, idx) => {
            console.log(post);
            return (
              <li key={posts[idx]} className="py-4 md:py-12">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  {post.data?.date ? (
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={post.data.date}>
                          {format(parseISO(post.data.date), "MMMM dd, yyyy")}
                        </time>
                      </dd>
                    </dl>
                  ) : null}
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        {post.data.title}
                      </h2>
                      <div className="prose text-gray-500">
                        {post.content.includes("--- more ---") &&
                          post.content.split("--- more ---")[0]}
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link
                        href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                        className="text-secondary hover:text-primary"
                        aria-label={`Read "${post.data.title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
