import { md } from '@/styles/mediaQuery';
import { style } from '@vanilla-extract/css';

/**
 * Styles
 */
export const wrapper = style({
  position: 'relative',
  '@media': {
    [md.up('lg')]: { marginLeft: '200px', width: 'calc(100% - 200px)' },
  },
});
