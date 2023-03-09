import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
        <Head>
        <title>NewsApp
        </title>
        <meta name="description" content="the best news app of the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
