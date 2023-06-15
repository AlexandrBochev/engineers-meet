import styles from './About.module.scss'
import Image from 'next/image'
import chart from '../public/chart.svg'
import arrowBlue from '../public/arrow-blue.svg'
import arrowRed from '../public/arrow-red.svg'
import mouse from '../public/mouse.svg'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.mouse}>
          <Image
            src={mouse}
            width={17}
            height={29}
            alt='chart'
          />
        </div>
      <div className={styles.title}>
        <p>ABOUT US</p>
        <h2>Global technologies</h2>
      </div>
      <div className={styles.article}>
        <div className={styles.chart}>
          <Image
            src={chart}
            width={508}
            height={496}
            alt='chart'
          />
        </div>
        <div className={styles.level}>
          <h3>Level 1</h3>
          <div className={styles.text}>
            <Image
              src={arrowBlue}
              width={36}
              height={43}
              alt='arrow blue'
            />
            <p>Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.</p>
          </div>
          <div className={styles.text}>
            <Image
              src={arrowRed}
              width={36}
              height={43}
              alt='arrow red'
            />
            <p>Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.</p>
          </div>
          <button>Start Now</button>
        </div>
      </div>
    </section>
  )
}

export default About