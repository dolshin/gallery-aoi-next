'use client';
import { useState } from 'react';
import { HambergerMenu } from '@/components/HambergerMenu';
import * as styles from './Navigation.css';
import { NavigationList } from './list/NavigationList';
import type { NavigationProps } from './NavigationProps';

export const Navigation = ({ items }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={styles.navRoot}
        data-state={isMenuOpen ? 'open' : 'closed'}
      >
        <div className={styles.navigationListWrapper}>
          <NavigationList items={items} handleMenuClick={handleMenuClick} />
        </div>
      </nav>
      <HambergerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />{' '}
    </>
  );
};
