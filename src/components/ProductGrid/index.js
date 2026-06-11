import React from 'react';
import styles from './styles.module.css';

export default function ProductGrid({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}