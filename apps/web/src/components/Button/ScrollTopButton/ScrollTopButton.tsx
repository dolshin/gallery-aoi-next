'use client';
import { useScroll } from '@lib/hooks/useScroll';
import { ChevronUp } from '@dolshin/icons/ui';
import * as styles from './ScrollTopButton.css';
import clsx from 'clsx';

export const ScrollTopButton = () => {
  const { isVisible, scrollTop } = useScroll();

  return (
    <button
      onClick={scrollTop}
      className={clsx(styles.buttonRoot, !isVisible && styles.buttonHidden)}
      data-state={isVisible ? 'visible' : 'hidden'}
      aria-label="Scroll to top"
    >
      <ChevronUp className={styles.buttonIcon} />
    </button>
  );
};
