import * as React from 'react';
import Head from 'next/head';
import { Header } from '../components';

export const Layout: React.FC = ({ children }) =>
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css' />
      <title>Paul Coroneos</title>
    </Head>
    <Header />{children}
  </>
