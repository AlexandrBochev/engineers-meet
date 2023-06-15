import styles from './Future.module.scss'
import Image from 'next/image'
import lineSm from '../public/line-sm.svg'
import lineLg from '../public/line-lg.svg'
import futureLogo from '../public/future-logo.svg'
import Link from 'next/link'

const Future = () => {
  return (
    <section className={styles.future}>
      <div className={styles.title}>
        <h2>The future <span>of</span> Cryptocurrency trading <span>platform</span></h2>
        <p>Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>
        <Link href="/">Learn more</Link>
      </div>
      <div className={styles.scheme}>
        <div className={styles.linesm}>
          <Image
            src={lineSm}
            width={167}
            height={561}
            alt='Line sm'
          />
        </div>
        <div className={styles.linelg}>
          <Image
            src={lineLg}
            width={406}
            height={254}
            alt='Line Lg'
          />
        </div>
        <div className={styles.block1}>
          <div className={styles.block1_1}><p>P2P Networks</p></div>
          <div className={styles.block1_2}><p>Artificial Intelligence</p></div>
          <div className={styles.block1_3}><p>Storage Networks</p></div>
        </div>
        <div className={styles.block2}>
          <div className={styles.block2_1}>Public Data</div>
          <div className={styles.block2_2}>Encrypted Private Data *</div>
        </div>
        <div className={styles.block3}>
          <div className={styles.block3_1}><p>Indexing</p></div>
          <div className={styles.block3_2}><p>API</p></div>
          <div className={styles.block3_3}>
            <Image
              src={futureLogo}
              width={68}
              height={71}
              alt='Future Logo'
            />
            <p>Easy to use digital service and exclusive personal service for our active traders</p>
          </div>
          <p className={styles.consumers}>Consumers</p>
        </div>
      </div>
    </section>
  )
}

export default Future