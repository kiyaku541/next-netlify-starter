import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ファイル置き場" />
        <p className="description">
          アプリに必要なファイルを置くためのダミーサイトです
        </p>
      </main>

      <Footer />
    </div>
  )
}
