import { Facebook, Instagram, X } from '@dolshin/icons/brands';
import type { SocialLink } from '../types/socialLink';

export const SOCIAL_LINKS: SocialLink = {
  Facebook: {
    icon: Facebook,
    baseUrl: 'https://www.facebook.com/',
    label: 'Facebook',
  },
  X: { icon: X, baseUrl: 'https://twitter.com/', label: 'X' },
  Instagram: {
    icon: Instagram,
    baseUrl: 'https://www.instagram.com/',
    label: 'Instagram',
  },
};
