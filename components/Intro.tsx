import styles from './Intro.module.scss'
import Image from 'next/image'
import arr from '../public/arrow-btn.svg'

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>CRYPTO TRADING</p>
        <h1>Engineers Meet <span>Traders __</span></h1>
        <p className={styles.article}>Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.</p>
      </div>
      <button>
        Learn More
        <Image
          src={arr}
          width={32}
          height={32}
          alt='Arrow btn'
        />
      </button>
      <div className={styles.scheme}></div>
    </section>
  )
}

export default Intro