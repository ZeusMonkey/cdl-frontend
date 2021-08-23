import styles from './Root.module.scss';

import Routes from '../Routes';

const Root = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <Routes />
      </div>
    </div>
  );
};

export default Root;
