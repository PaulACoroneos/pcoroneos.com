import * as React from 'react';
import Head from 'next/head'
import '../css/tailwind.css'
import SectionContainer from '@/components/section-container/section-container'
import Header from '@/components/header/header';

// export const theme = {
//   color: {
//     primary: '#6A85B7',
//     secondary: '#094074',
//     tertiary: '#0D1321',
//     quaternary: '#1D2D44',
//     quinary: '#3e5c76'

//   },
//   breakpoints: {
//     small: 320,
//     medium: 768,
//     large: 1200
//   },
//   spacing: {
//     margin: {
//       s: 4,
//       m: 8,
//       l: 12,
//       xl: 16
//     },
//     padding: {
//       s: 4,
//       m: 8,
//       l: 12,
//       xl: 16
//     }
//   }
// };

export default function App({ Component, pageProps }) {
  return (
    <div className='antialiased'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      </Head>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  )
}
