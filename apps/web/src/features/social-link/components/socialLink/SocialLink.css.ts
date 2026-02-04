import { md } from '@styles/mediaQuery';
import { style } from '@vanilla-extract/css';

/**
 * 仮トークン（後で color / typography / spacing tokens に昇格）
 */
const SNS = {
  textColor: '#fff',
  color: {
    base: '#666',
    hover: '#000',
  },
};

/**
 * Styles
 */
export const socialLink = style({
  color: SNS.textColor,
  '@media': {
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
  },
});
