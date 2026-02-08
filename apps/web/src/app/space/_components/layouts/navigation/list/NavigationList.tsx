'use client';
import * as styles from './NavigationList.css';
import { NavigationListItem } from './item/NavigationListItem';
import type { NavigationListProps } from './NavigationList.types';
import { useNavigationList } from './useNavigationList';
import { SocialLinks } from '@/features/social-link/components';
import { SOCIAL_LINKS } from '../../../../../_config/social-links';
import { md } from '@/styles/mediaQuery';

export const NavigationList = ({
  items,
  handleMenuClick,
}: NavigationListProps) => {
  const activeSection = useNavigationList({ items });
  const iconSize = md.up('lg') ? '19px' : 'clamp(20px, 5.5vw, 24px)';
  return (
    <div className={styles.navigationListWrapper}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <NavigationListItem
            key={index}
            item={item}
            isActiveItem={item.sectionId === activeSection}
            handleMenuClick={handleMenuClick}
            index={index}
          />
        ))}
        <li className={styles.socialLinks}>
          <SocialLinks items={SOCIAL_LINKS} iconSize={iconSize} />
        </li>
      </ul>
    </div>
  );
};
