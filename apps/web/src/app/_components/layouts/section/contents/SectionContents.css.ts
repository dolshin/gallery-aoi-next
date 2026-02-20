import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * ------------------------------------------------------------
 * 仮トークン（後で spacing / layout tokens に差し替える前提）
 * ------------------------------------------------------------
 */
const PAGE_ITEM_PADDING = {
  lg: '30px 0 0 20px',
  sm: '10px 0 0',
} as const;

/**
 * Styles
 */
export const contents = style({
  '@media': {
    [md.up('lg')]: {
      padding: PAGE_ITEM_PADDING.lg,
    },
    [md.down('lg')]: {
      padding: PAGE_ITEM_PADDING.sm,
    },
  },
});
