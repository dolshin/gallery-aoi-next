import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で spacing / radius / size tokens に昇格）
 */
const MAP = {
  marginTop: '30px',
  radius: '12px',
  desktop: {
    maxWidth: '700px',
    height: '400px',
  },
  mobile: {
    maxWidth: '100%',
    height: '350px',
  },
};

/**
 * Styles
 */
const mapBase = style({
  marginTop: MAP.marginTop,
  borderRadius: MAP.radius,
  overflow: 'hidden', // iframe / img 対策
});

export const mapLayout = style([
  mapBase,
  {
    '@media': {
      [md.up('lg')]: {
        maxWidth: MAP.desktop.maxWidth,
        height: MAP.desktop.height,
      },
      [md.down('lg')]: {
        maxWidth: MAP.mobile.maxWidth,
        height: MAP.mobile.height,
      },
    },
  },
]);
