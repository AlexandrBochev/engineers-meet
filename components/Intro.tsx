import styles from './Intro.module.scss'
import Image from 'next/image'
import arr from '../public/arrow-btn.svg'
import { motion as m } from "framer-motion"

const Intro = () => {
  return (
    <section className={styles.container}>
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className={styles.title}
      >
        <p>CRYPTO TRADING</p>
        <h1>Engineers Meet <span>Traders __</span></h1>
        <p className={styles.article}>Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.</p>
      </m.div>
      <m.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        Learn More
        <Image
          src={arr}
          width={32}
          height={32}
          alt='Arrow btn'
        />
      </m.button>
      <m.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className={styles.scheme}>
      </m.div>
    </section>
  )
}

export default Intro