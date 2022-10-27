import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import getAllPostPreviews from 'getAllPostPreviews';

const Leetcode = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const sortedPostsInDesc = getAllPostPreviews().sort((a, b) =>
      new Date(b.module.meta.date) > new Date(a.module.meta.date) ? 1 : -1
    );
    setPosts(sortedPostsInDesc);
  }, []);

  return (
    <div className='divide-y divide-gray-200'>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pacman326' />
        <meta name='twitter:creator' content='@pacman326' />
        <meta name='twitter:title' content='Paul Coroneos' />
        <meta
          name='twitter:description'
          content='Personal blog and portfolio for Paul Coroneos.'
        />
        <meta
          name='twitter:image'
          content='https://pcoroneos.com/paulcoroneos.jpg'
        />
        <meta property='og:url' content='https://pcoroneos.com' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Paul Coroneos' />
        <meta
          property='og:description'
          content='Paul Coroneos developer personal web site.'
        />
        <meta
          property='og:image'
          content='https://pcoroneos.com/paulcoroneos.jpg'
        />
        <title>Leetcode – Paul Coroneos</title>
      </Head>
      <div className='pt-4 md:pt-6 pb-4 md:pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Latest Leetcode Solutions
        </h1>
      </div>
      <ul className='divide-y divide-gray-200'>
        {(posts ?? [])
          .filter(post => post?.module?.meta?.date)
          .filter(post => post.module?.meta?.tag?.includes('leetcode'))
          .map(({ link, module: { default: Component, meta } }) => 
            <li key={link} className='py-4 md:py-12'>
              <article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base leading-6 font-medium text-gray-500'>
                    <time dateTime={meta.date}>
                      {format(parseISO(meta.date), 'MMMM dd, yyyy')}
                    </time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-6'>
                    <h2 className='text-2xl leading-8 font-bold tracking-tight'>
                      <Link href={link} className='text-gray-900'>
                        {meta.title}
                      </Link>
                    </h2>
                    <div className='prose text-gray-500'>
                      <Component />
                    </div>
                  </div>
                  <div className='text-base leading-6 font-medium'>
                    <Link
                      href={link}
                      className='text-secondary hover:text-primary'
                      aria-label={`Read "${meta.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )}
      </ul>
    </div>
  );
};

export default Leetcode;
