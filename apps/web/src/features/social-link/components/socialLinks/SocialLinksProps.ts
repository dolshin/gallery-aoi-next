import type { SocialLinkItem } from '../socialLink';

export type SocialLinksProps = {
  items: SocialLinkItem[];
  iconSize?: number | string;
  className?: string;
};
