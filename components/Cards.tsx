import styles from './Cards.module.scss'

const Cards = () => {
  return (
    <section className={styles.cards}>
      <div className={styles.block1}>
        <div className={styles.block1_items}>
          <p>SPOT & MARGIN</p>
          <h3>Trade <span>200+</span> pairs with up to 10x leverage</h3>
          <p>Learn more</p>
        </div>
      </div>
      <div className={styles.block2}>
        <div className={styles.block2_1}>
          <div className={styles.block2_items}>
            <p>DERIVATIVES</p>
            <h3>40+ quarterly futures and contracts</h3>
            <p>Learn more</p>
          </div>
        </div>
        <div className={styles.block2_1}>
          <div className={styles.block2_items}>
            <p>TRADING ARENA</p>
            <h3>Prize pools worth up to usd 1,000,000</h3>
            <p>Learn more</p>
          </div>
        </div>
        <div className={styles.block2_2}>
          <div className={styles.block2_items}>
            <p>MOBILE APP</p>
            <h3>Trade anytime, anywhere</h3>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards