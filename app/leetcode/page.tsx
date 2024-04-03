"use client";
import * as React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import getAllPostPreviews from "../../utilities/mdx";

const Leetcode = () => {
  const [typedFilter, setTypedFilter] = React.useState<string | null>(null);

  const sortedPostsInDesc = React.useMemo(
    () =>
      getAllPostPreviews()
        .sort((a, b) =>
          new Date(b.module.meta.date) > new Date(a.module.meta.date) ? 1 : -1
        )
        .filter((post) => post?.module?.meta?.date)
        .filter((post) => post.module?.meta?.tags?.includes("leetcode")),
    []
  );

  const posts = typedFilter
    ? sortedPostsInDesc.filter((post) =>
        post.module?.meta?.title.includes(typedFilter)
      )
    : sortedPostsInDesc;

  return (
    <div className="divide-gray-200 divide-y">
      <div className="space-y-2 py-4 md:space-y-5 md:pb-8 md:pt-6">
        <h1 className="text-gray-900 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest Leetcode Solutions
        </h1>
      </div>
      <div className="flex justify-end py-4">
        <label>
          <span className="pr-2 text-lg font-medium">Search Solutions</span>
          <input
            className="appearance-none rounded border pl-2 shadow"
            type="text"
            onKeyUp={(evt) => setTypedFilter(evt.currentTarget.value)}
          />
        </label>
      </div>
      <ul className="divide-gray-200 divide-y">
        {posts.map(({ link, module: { default: Component, meta } }) => (
          <li key={link} className="py-4 md:py-12">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-gray-500 text-base font-medium leading-6">
                  <time dateTime={meta.date}>
                    {format(parseISO(meta.date), "MMMM dd, yyyy")}
                  </time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={link} className="text-gray-900">
                      {meta.title}
                    </Link>
                  </h2>
                  <div className="text-gray-500 prose">
                    <Component />
                  </div>
                </div>
                <div className="text-base font-medium leading-6">
                  <Link
                    href={link}
                    className="text-secondary hover:text-primary"
                    aria-label={`Read "${meta.title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leetcode;
