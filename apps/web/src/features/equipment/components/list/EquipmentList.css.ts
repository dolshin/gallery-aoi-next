import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/*
 * Tokens（仮：後で spacing / color / radius に昇格）
 */

const EQUIPMENT = {
  bg: '#eee',
  radius: '16px',

  marginTop: 'clamp(48px, 4.875vw, 78px)',

  padding: {
    desktop: '42px 80px 49px',
    tablet: '24px 60px',
    mobile: '24px 11vw',
  },

  list: {
    width: '250px',
    gap: 'clamp(40px, 3vw, 80px)',
  },

  text: {
    letterSpacing: '0.1em',
  },
};

/*
 * Equipment Wrapper
 */

export const equipmentWrapper = style({
  width: '100%',
  background: EQUIPMENT.bg,
  marginTop: EQUIPMENT.marginTop,
  padding: EQUIPMENT.padding.desktop,
  borderRadius: EQUIPMENT.radius,

  '@media': {
    [md.between('sm', 'lg')]: {
      padding: EQUIPMENT.padding.tablet,
    },

    [md.down('sm')]: {
      padding: EQUIPMENT.padding.mobile,
    },
  },
});

/*
 * Equipment List Layout
 */

export const equipmentListLayout = style({
  '@media': {
    [md.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      columnGap: EQUIPMENT.list.gap,
    },
  },
});

/*
 * Equipment Count
 */

export const equipmentCount = style({
  margin: 0,
});

/*
 * Equipment List (ul)
 */

export const equipmentList = style({
  margin: 0,
  width: EQUIPMENT.list.width,
  textAlign: 'left',
});

/*
 * Equipment Item Text (p)
 */

export const equipmentItemText = style({
  letterSpacing: EQUIPMENT.text.letterSpacing,
});
