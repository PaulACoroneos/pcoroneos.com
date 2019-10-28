import * as React from 'react';
import { Header } from '../components';
import Head from 'next/head';

export const Portfolio: React.FC = () =>
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Paul Coroneos</title>
    </Head>
    <style jsx global>{`
      body {
        color: #000;
        margin: 0px;
        padding: 0px;
        font-size: 16px;
      }
    `}</style>
    <Header />
  </>
  ;

export default Portfolio;
