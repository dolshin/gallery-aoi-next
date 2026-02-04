import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で layout / z-index tokens に昇格）
 */
const NAV_LIST = {
  zIndex: 9999,
};

const SNS = {
  textColor: '#fff',
  fontSize: 'clamp(20px, 5.5vw, 24px)',
  padding: 'clamp(17px, 3.5vw, 21px)',
  color: {
    base: '#666',
    hover: '#000',
  },
  left: '5px',
  top: '480px',
  PCGap: '24px',
  mobileGap: '34px',
};

/**
 * Styles
 */

export const navigationListWrapper = style({
  '@media': {
    [md.down('lg')]: {
      position: 'fixed',
      zIndex: NAV_LIST.zIndex,
      width: '100%',
      height: '100vh',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
  },
});

export const navList = style({
  '@media': {
    [md.up('lg')]: {
      textAlign: 'right',
      lineHeight: 2,
      fontSize: 'clamp(15px, 1.1vw, 18px)',
    },

    [md.down('lg')]: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
  },
});

export const socialLinks = style({
  '@media': {
    [md.up('lg')]: {
      position: 'absolute',
      left: SNS.left,
      top: SNS.top,
      lineHeight: 1,
      padding: 0,
      fontSize: SNS.fontSize,
      gap: SNS.PCGap,
    },
    [md.down('lg')]: {
      color: SNS.textColor,
      width: 'max-content',
      padding: SNS.padding,
      margin: '0 auto',
      listStyle: 'none',
      gap: SNS.mobileGap,
    },
  },
});

export const socialLink = style({
  color: SNS.textColor,
  fontSize: SNS.fontSize,
  [md.up('lg')]: {
    color: SNS.color.base,
    textDecoration: 'none',
    transition: 'color 0.2s ease',

    selectors: {
      '&:hover': {
        color: SNS.color.hover,
      },
    },
  },
});
