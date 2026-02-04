import type { SocialType } from '../../types/socialLink';

export type SocialLinkItem = {
  type: SocialType;
  usernameOrUrl: string;
};
