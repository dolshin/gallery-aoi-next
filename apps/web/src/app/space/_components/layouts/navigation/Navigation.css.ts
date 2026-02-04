import { style, keyframes } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/* ------------------------------------------------------------
 * Tokens
 * ------------------------------------------------------------ */

const NAV = {
  desktop: {
    top: '128px',
    left: '60px',
    tracking: '0.18em',
    text: '#666',
    active: '#000',
    indicator: '#707070',
    hover: '#11283d',
  },
  mobile: {
    bg: '#11283df2',
    text: '#fff',
    hover: '#444',
    zIndex: 9999,
  },
};

/* ------------------------------------------------------------
 * Animation
 * ------------------------------------------------------------ */

export const fadeIn = keyframes({
  from: { opacity: 0, transform: 'translateY(50px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

/* ------------------------------------------------------------
 * Root
 * ------------------------------------------------------------ */

export const navRoot = style({
  '@media': {
    [md.up('lg')]: {
      position: 'absolute',
      top: NAV.desktop.top,
      left: NAV.desktop.left,
      letterSpacing: NAV.desktop.tracking,
    },

    [md.down('lg')]: {
      position: 'fixed',
      inset: 0,
      background: NAV.mobile.bg,
      opacity: 0,
      zIndex: -1,

      selectors: {
        '&[data-state="open"]': {
          opacity: 1,
          zIndex: NAV.mobile.zIndex,
        },
      },
    },
  },
});

export const navigationListWrapper = style({
  '@media': {
    [md.down('lg')]: {
      position: 'fixed',
      inset: 0,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      zIndex: NAV.mobile.zIndex,
    },
  },
});
