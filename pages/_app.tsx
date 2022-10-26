import * as React from 'react'
import '../css/tailwind.css'
import '../css/night-owl.css'
import Head from 'next/head'
import SectionContainer from '../components/section-container'
import Header from 'components/header'
import Footer from 'components/footer'

type AppProps = {
  Component: React.ComponentType;
  pageProps:any
}
const App = ({ Component, pageProps }: AppProps) => 
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
        <Footer />
      </SectionContainer>
    </div>
  
export default App;
