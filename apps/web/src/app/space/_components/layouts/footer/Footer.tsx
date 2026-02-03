import * as styles from './Footer.css';

/**
 * フッター
 */
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <small className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Gallery AOI
      </small>{' '}
    </div>
  );
};
