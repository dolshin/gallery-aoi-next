'use client';
import type { NavigationListItemProps } from './NavigationListItemProps';
import * as styles from './NavigationListItem.css';
import clsx from 'clsx';
import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { staggerDelayVar } from './NavigationListItem.css';

export const NavigationListItem = ({
  item,
  isActiveItem,
  handleMenuClick,
  index,
}: NavigationListItemProps) => {
  const BASE_DELAY = 0.2;
  const STEP = 0.2;

  const { label, path } = item;
  return (
    <li
      className={clsx(styles.navItem, styles.itemStagger)}
      style={assignInlineVars({
        [staggerDelayVar]: `${BASE_DELAY + STEP * index}s`,
      })}
    >
      <Link
        href={path}
        className={styles.navLink}
        data-active={isActiveItem ? 'true' : 'false'}
        aria-current={isActiveItem ? 'page' : undefined}
        onClick={handleMenuClick}
      >
        {label}
      </Link>
    </li>
  );
};
