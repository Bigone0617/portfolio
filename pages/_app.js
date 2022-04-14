import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="프론트엔드 개발자 - 김태일 포트폴리오 웹사이트" key="title" />
        <meta property="og:description" content='프론트엔드 개발자 김태일의 포트폴리오 사이트입니다.' key="description" />
        <meta name="viewport" content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="fTNuB859nP8iVGGkhCaf5WDYaqSn5vpObazmkC8Q1uI" />
        <link rel="main icon" href='/favicon.ico'/>
        <title>프론트엔드 개발자 - 김태일의 포트폴리오</title>
      </Head>
      <span>
        <Component {...pageProps} />
      </span>
    </>
  )
}

export default MyApp
