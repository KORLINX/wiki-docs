import React from 'react';
import styles from './styles.module.css';

export default function ProductCard({
  title,
  subtitle,
  image,
  badge,
  specs = [],
  getStarted,
  datasheet,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        {badge && (
          <div className={styles.badge}>
            {badge}
          </div>
        )}
        
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>

        <table className={styles.specTable}>
          <tbody>
            {specs.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.buttons}>
          <a
            className="button button--primary"
            href={getStarted}
          >
            Get Started
          </a>

          <a
            className="button button--secondary"
            href={datasheet}
          >
            Datasheet
          </a>
        </div>
      </div>
    </div>
  );
}