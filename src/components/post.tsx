import Head from 'next/head';
import PageTitle from './page-title';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { format, parse } from 'date-fns';

//TODO Paul. Figure out why I cant override code terminal bg color
const mdxComponents = {
  pre: ({ className, ...props }) =>
    <pre
      className={`${className} rounded-md py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ,
  'pre.code': ({ className, ...props }) =>
    <code className={`${className} text-gray-200`} {...props} />
  ,
};

type PostProps = {
  meta: any;
  posts: any;
  children: React.ReactChild;
};

const Post = ({ meta, children, posts }: PostProps) => {
  const router = useRouter();
  const postIndex = posts.findIndex(post => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];

  return (
    <article className='divide-y divide-gray-200' data-testid='blog-post'>
      <Head>
        <title>{meta.title} - Paul Coroneos</title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pacman326' />
        <meta name='twitter:creator' content='@pacman326' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content={`https://pcoroneos.com${meta.image}`}
        />
        <meta
          property='og:url'
          content={`https://pcoroneos.com${router.pathname}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:image'
          content={`https://pcoroneos.com${meta.image}`}
        />
      </Head>
      <header className='py-4'>
        <div className='space-y-1 text-center'>
          {meta.date &&
            <dl className='space-y-10'>
              <div>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-base leading-6 font-medium text-gray-500'>
                  <time dateTime={meta.date}>
                    {format(parse(meta.date), 'MMMM DD, YYYY')}
                  </time>
                </dd>
              </div>
            </dl>
          }
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className='divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2'>
          <div className='prose py-8 px-2'>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.discussion &&
            <div className='pt-6 pb-16'>
              <p>
                Want to talk about this post?{' '}
                <a
                  href={meta.discussion}
                  className='font-medium text-secondary hover:text-primary'
                >
                  Discuss this on GitHub &rarr;
                </a>
              </p>
            </div>
          }
        </div>
        <footer className='text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2'>
          {(next || previous) &&
            <div className='space-y-8 py-8'>
              {next &&
                <div>
                  <h2 className='text-xs tracking-wide uppercase text-gray-500'>
                    Next Article
                  </h2>
                  <div className='text-secondary hover:text-primary'>
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              }
              {previous &&
                <div>
                  <h2 className='text-xs tracking-wide uppercase text-gray-500'>
                    Previous Article
                  </h2>
                  <div className='text-secondary hover:text-primary'>
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              }
            </div>
          }
          <div className='pt-8'>
            <Link href='/'>
              <a className='text-secondary hover:text-primary'>
                &larr; Back to the blog
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Post;
