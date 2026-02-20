import type { SocialLinksProps } from './SocialLinksProps';
import * as styles from './SocialLinks.css';
import clsx from 'clsx';
import { SocialLink } from '../socialLink';

export const SocialLinks = ({
  items,
  iconSize,
  className,
}: SocialLinksProps) => {
  return (
    <ul className={clsx(styles.socialLinks, className)}>
      {items.map((item) => {
        return <SocialLink key={item.type} {...item} size={iconSize} />;
      })}
    </ul>
  );
};
