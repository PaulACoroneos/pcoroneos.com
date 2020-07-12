import * as React from 'react';
import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/pages/get-all-post-previews'
// import twitterCard from '@/img/twitter-card.jpg'

//eslint-ignore

const posts = getAllPostPreviews()

export default function Home() {
  return (
    <div className='divide-y divide-gray-200'>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pacman326' />
        <meta name='twitter:creator' content='@pacman326' />
        <meta name='twitter:title' content='Paul Coroneos' />
        <meta name='twitter:description' content='Blog and portfolio for Paul Coroneos' />
        {/* <meta name='twitter:image' content={`https://blog.tailwindcss.com${twitterCard}`} /> */}
        <meta property='og:url' content='https://blog.tailwindcss.com' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Paul Coroneos' />
        <meta property='og:description' content='Blog and portfolio for Paul Coroneos' />
        {/* <meta property='og:image' content={`https://blog.proconeos.com${twitterCard}`} /> */}
        <title>Paul Coroneos</title>
      </Head>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Latest
        </h1>
        <p className='text-lg leading-7 text-gray-500'>
          My personal blog from Paul Coroneos.
        </p>
      </div>
      <ul className='divide-y divide-gray-200'>
        {posts.map(({ link, module: { default: Component, meta } }) => 
            <li key={link} className='py-12'>
              <article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base leading-6 font-medium text-gray-500'>
                    <time dateTime={meta.date}>
                      {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(meta.date))}
                    </time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-6'>
                    <h2 className='text-2xl leading-8 font-bold tracking-tight'>
                      <Link href={link}>
                        <a className='text-gray-900'>{meta.title}</a>
                      </Link>
                    </h2>
                    <div className='prose text-gray-500'>
                      <Component />
                    </div>
                  </div>
                  <div className='text-base leading-6 font-medium'>
                    <Link href={link}>
                      <a
                        className='text-teal-500 hover:text-teal-600'
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )}
      </ul>
    </div>
  )
}
