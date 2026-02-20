'use client';
import Link from 'next/link';
import type { MenuItemProps } from './MenuItemProps';
import { ChevronRight } from '@dolshin/icons/ui';
import * as styles from './MenuItem.css';

export const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <li style={{ marginRight: '1.5em', listStyle: 'none' }}>
      <Link className={styles.link} href={href}>
        <ChevronRight
          style={{ fontSize: '14px', marginBottom: '1px', marginRight: '4px' }}
        />
        {label}
      </Link>
    </li>
  );
};
