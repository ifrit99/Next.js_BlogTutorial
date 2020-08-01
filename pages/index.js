import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>こんにちは！イフリトと申します。2019年11月から異業種からIT業界へ転職致しました。
          前職は食品工場で働いてました。今はSESで出向先で社内SEをしています。
          よろしければTwitterフォローよろしくお願いします。id:ifrit_anplosia
        </p>
        <p>
          (This is a sample wesite - you'll be building a site like this on{' '})
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}