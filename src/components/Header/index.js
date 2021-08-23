/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import logo from 'assets/images/logo.png';
import avatar from 'assets/images/avatar.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div className={styles.separator} />
        <p className={styles.p1}>
          <span>YELD</span>
          <br />
          Next-Generation Yield Farming
        </p>
      </div>

      <div className={styles.navTop}>
        <a href="#" className={styles.navBtn}>
          Wallet
        </a>
        <a href="#" className={styles.navBtn}>
          Portfolio
        </a>
        <div className={styles.profileBtn}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <span className={styles.name}>Your name</span>
          <FontAwesomeIcon icon={faAngleDown} color="#2036ff" />
        </div>
      </div>
    </div>
  );
};

export default Header;
