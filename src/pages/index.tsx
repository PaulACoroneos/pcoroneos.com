import { Header } from '../components';
import * as React from 'react';
import { HomePage } from '../components/home-page';
import Head from 'next/head';

const Blog: React.FC = () =>
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>Paul Coroneos</title>
    </Head>
    <style jsx global>{`
      body {
        color: #000;
        margin: 0px;
        padding: 0px;
        font-size: 16px;
      }
      h2 {
        padding:0;
        margin:0;
      }
    `}</style>
    <Header />
    <HomePage />
  </>
  ;

export default Blog;
