import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Your Cryptocurrency Score</h3>
      <div className={styles.details}>
        <div className={styles.marketSize}>
          <span className={styles.marketSizeLabel}>Current market size</span>
          <span className={styles.marketSizeValue}>$195,546,326,429</span>
        </div>
        <div className={styles.score}>
          <span className={styles.scoreValue}>38</span>
        </div>
        <div className={styles.balanceDetails}>
          <span className={styles.balance}>Supply balance : 0$</span>
          <span className={styles.balance}>Borrow balance : 0$</span>
        </div>
      </div>
      <div className={styles.borrowDetails}>
        <span className={styles.borrowLabel}>Borrow Limit</span>
        <span className={styles.borrowPercent}>12%</span>
        <div className={styles.borrowProgress}>
          <div
            className={styles.borrowProgressActive}
            style={{ '--borrow-percent': 12 }}
          />
        </div>
        <span className={styles.borrowAmount}>120$</span>
      </div>
    </div>
  );
};

export default Stats;
