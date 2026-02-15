import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

const SECTION_MARGIN_TOP = {
  lg: '150px',
  sm: '80px',
} as const;

/**
 * Styles
 */
export const section = style({
  '@media': {
    [md.up('lg')]: {
      marginTop: SECTION_MARGIN_TOP.lg,
    },
    [md.down('lg')]: {
      marginTop: SECTION_MARGIN_TOP.sm,
    },
  },
});
