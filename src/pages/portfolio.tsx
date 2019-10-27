import * as React from 'react';
import { Header } from '../components';
import Head from 'next/head';

export const Portfolio: React.FC = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Paul Coroneos</title>
    </Head>
    <style jsx global>{`
      body {
        max-width: 800px;
        margin: 0 auto;
        background: #0e1111;
        color: #fff;
        width: 100%;
        font-size: 16px;
      }
      header {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 8px;
      }
    `}</style>
    <Header />
  </>
);

export default Portfolio;
