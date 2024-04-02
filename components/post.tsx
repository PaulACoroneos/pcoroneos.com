"use client";
import PageTitle from "./page-title";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { usePathname } from "next/navigation";

// write type for postprops
type Meta = {
  title: string;
  description: string;
  image: string;
  date: string;
  discussion: string;
};

type PostProps = {
  meta: Meta;
  children: React.ReactNode;
};

const Post = ({ meta, children }: PostProps) => {
  const pathname = usePathname();
  return (
    <article className="divide-y divide-gray-200" data-testid="blog-post">
      <head>
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
        <meta property="og:url" content={`https://pcoroneos.com${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://pcoroneos.com${meta.image}`}
        />
      </head>
      <header className="py-4">
        <div className="space-y-1 text-center">
          {meta.date && (
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500">
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
        <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose px-2 py-8">{children}</div>
          {meta.discussion && (
            <div className="pb-16 pt-6">
              <p>
                Want to talk about this post?{" "}
                <a
                  href={meta.discussion}
                  className="text-secondary hover:text-primary font-medium"
                >
                  Discuss this on GitHub &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
        <footer className="divide-y divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
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
