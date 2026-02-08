import type { BrandIconType } from '@dolshin/icons/brands';

export type SocialType = 'Facebook' | 'X' | 'Instagram';

export type SocialLinkItem = {
  icon: BrandIconType;
  baseUrl: string;
  label: string;
};

export type SocialLink = Record<SocialType, SocialLinkItem>;
