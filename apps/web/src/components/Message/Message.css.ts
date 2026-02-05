import { style } from '@vanilla-extract/css';

export const message = style({
  selectors: {
    '&[data-variant="error"]': {
      color: 'red',
    },
    '&[data-variant="success"]': {
      color: 'green',
    },
  },
});
