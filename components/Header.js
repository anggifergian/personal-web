import Head from 'next/head'

const Header = ({ title = 'Anggi Fergian' }) => (
  <Head>
    <meta charSet='utf-8' />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Anggi Fergian Pratama" />

    <title>{title}</title>
    <link rel="icon" href="/af-logo.ico" />
  </Head>
)

export default Header