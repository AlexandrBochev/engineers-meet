import Head from 'next/head'
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Future from "../components/Future";
import Cards from "../components/Cards";
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Engineers Meet</title>
        <meta name="description" content="Engineers Meet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <Navbar />
          <Intro />
          <About />
          <Future />
          <Cards />
        </div>
      </main>
    </div>
  )
}
