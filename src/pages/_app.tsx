import * as React from 'react'
import '../css/tailwind.css'
import Head from 'next/head'
import SectionContainer from '../components/SectionContainer'
import Header from '../components/Header'

type AppProps = {
  Component: React.FC
  pageProps:any
}
const App:React.FC<AppProps> = ({ Component, pageProps }) => 
    <div className='antialiased'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#094074' />
        <meta name='msapplication-TileColor' content='#094074' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      </Head>
      <Header />
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  
export default App;
