import React from 'react';
import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
