import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で spacing / layout / color tokens に昇格）
 */
const SIDEBAR = {
  width: '200px',
  zIndex: 9999,
};

const LOGO_POSITION = {
  lg: {
    top: '30px',
    left: '68px',
  },
  sm: {
    top: '35px',
    left: '4%',
  },
};

/**
 * Styles
 */
export const sidebar = style({
  '@media': {
    [md.up('lg')]: {
      width: SIDEBAR.width,
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
    },

    [md.down('lg')]: {
      zIndex: SIDEBAR.zIndex,
    },
  },
});

export const logoPlacement = style({
  position: 'absolute',

  '@media': {
    [md.up('lg')]: {
      top: LOGO_POSITION.lg.top,
      left: LOGO_POSITION.lg.left,
    },

    [md.down('lg')]: {
      top: LOGO_POSITION.sm.top,
      left: LOGO_POSITION.sm.left,
      margin: 0,
    },
  },
});
