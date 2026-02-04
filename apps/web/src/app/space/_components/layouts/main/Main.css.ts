import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で layout / spacing tokens に昇格）
 */
const MAIN_LAYOUT = {
  paddingLeft: {
    lg: 'clamp(100px, 12vw, 180px)',
  },
  width: {
    lg: '72%',
    md: '70%',
    sm: '85%',
  },
  margin: '0 auto',
} as const;

/**
 * Styles
 */

export const main = style({
  '@media': {
    [md.up('lg')]: {
      paddingLeft: MAIN_LAYOUT.paddingLeft.lg,
      width: MAIN_LAYOUT.width.lg,
      margin: MAIN_LAYOUT.margin,
    },

    [md.between('md', 'lg')]: {
      width: MAIN_LAYOUT.width.md,
      margin: MAIN_LAYOUT.margin,
    },

    [md.between('sm', 'md')]: {
      width: MAIN_LAYOUT.width.sm,
      margin: MAIN_LAYOUT.margin,
    },

    [md.down('sm')]: {
      width: MAIN_LAYOUT.width.sm,
      margin: MAIN_LAYOUT.margin,
    },
  },
});
