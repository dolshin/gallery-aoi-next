'use client';
import * as styles from './HambergerMenu.css';
import type { HambergerMenuProps } from './HambergerMenuProps';

export const HambergerMenu = ({ isOpen, toggleMenu }: HambergerMenuProps) => {
  return (
    <button
      className={styles.menuRoot}
      data-state={isOpen ? 'open' : 'closed'}
      onClick={toggleMenu}
      aria-label="Menu"
    >
      <span className={`${styles.menuLine} ${styles.lineTop}`} />
      <span className={`${styles.menuLine} ${styles.lineMiddle}`} />
      <span className={`${styles.menuLine} ${styles.lineBottom}`}>
        <span className={styles.menuLabel}>{isOpen ? 'Close' : 'Menu'}</span>
      </span>
    </button>
  );
};
