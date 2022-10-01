import Head from 'next/head'
import Script from 'next/script'

const Header = ({ title = 'Anggi Fergian' }) => (
  <>
    <Script
      id='gtag-source'
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script id='gtag-dataLayer' strategy='lazyOnload'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>

    <Head>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Anggi Fergian Pratama" />
      <meta name="theme-color" />

      <title>{title}</title>
      <link rel="icon" href="/af-logo.ico" />
    </Head>
  </>
)

export default Header