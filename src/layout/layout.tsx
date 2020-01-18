import * as React from 'react';
import Head from 'next/head';
import { Header } from '../components';

export const Layout: React.FC = ({ children }) =>
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css' />
      <link href='https://fonts.googleapis.com/css?family=Lora&display=swap' rel='stylesheet' />
      <title>Paul Coroneos</title>
    </Head>
    <style jsx global>{`
      html {
        height:100%
      }
      body { 
        font-size: 16px;
        font-family: 'Lora', serif;
        color:#1d1d1d;
        min-height:100vh;
      }
      h1{
        font-size:48px;
      }
      h2{
        font-size:24px;
      }
      h3{
        font-size:24px;
      }
      h4{
        font-size:18px;
      }
    `}</style>
    <Header />{children}
  </>
