"use client";
import PageTitle from "./page-title";
import Link from "next/link";
import { format, parseISO } from "date-fns";

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
  return (
    <article className="divide-gray-200 divide-y" data-testid="blog-post">
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
          <div className="prose px-2 py-8">{children}</div>
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
