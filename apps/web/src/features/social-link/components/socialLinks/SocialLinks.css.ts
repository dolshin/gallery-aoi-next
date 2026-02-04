import { md } from '@/styles/mediaQuery';
import { style } from '@vanilla-extract/css';

/**
 * 仮トークン（後で color / typography / spacing tokens に昇格）
 */
const SNS = {
  PCGap: '24px',
  mobileGap: '34px',
};

/**
 * Styles
 */
export const socialLinks = style({
  display: 'flex',
  '@media': {
    [md.up('lg')]: {
      gap: SNS.PCGap,
    },
    [md.down('lg')]: {
      gap: SNS.mobileGap,
    },
  },
});
