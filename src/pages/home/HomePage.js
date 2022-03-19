import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      HomePage
      <Link to={`/user/1`}>User 1</Link>
    </div>
  );
};

export default HomePage;
