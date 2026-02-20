import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で color / typography / spacing tokens に昇格）
 */
const COLORS = {
  border: '#e0e0e0',
  hoverBg: '#f1f4ff',
  text: '#000',
};

const TYPO = {
  title: {
    fontFamily: "'Montserrat Variable', sans-serif",
    weight: 400,
    tracking: '0.05em',
    size: {
      lg: '21px',
      md: '19px',
      sm: '18px',
      xs: '17px',
    },
  },
  date: {
    size: '16px',
    tracking: {
      base: '0.05em',
      sm: '0.05em',
    },
  },
  organizer: {
    size: '16px',
  },
};

const SPACING = {
  linkPaddingTop: '16px',
  titleMargin: '20px 0',
  datePaddingTop: '9px',
};

/**
 * Styles
 */

export const listItem = style({
  listStyle: 'none',
  borderBottom: `1px solid ${COLORS.border}`,

  selectors: {
    '&:hover': {
      backgroundColor: COLORS.hoverBg,
    },
  },
});

export const link = style({
  display: 'inline-block',
  paddingTop: SPACING.linkPaddingTop,
});

export const title = style({
  textAlign: 'left',
  fontSize: TYPO.title.size.lg,
  fontWeight: TYPO.title.weight,
  margin: SPACING.titleMargin,
  letterSpacing: TYPO.title.tracking,

  '@media': {
    [md.up('lg')]: {
      fontSize: TYPO.title.size.lg,
      letterSpacing: TYPO.title.tracking,
    },
    [md.between('md', 'lg')]: {
      fontSize: TYPO.title.size.md,
      letterSpacing: TYPO.title.tracking,
    },
    [md.between('sm', 'md')]: {
      fontSize: TYPO.title.size.sm,
      letterSpacing: TYPO.title.tracking,
    },
    [md.down('sm')]: {
      fontSize: TYPO.title.size.xs,
      letterSpacing: TYPO.title.tracking,
    },
  },
});

export const date = style({
  display: 'block',
  lineHeight: 1.33,
  fontSize: TYPO.date.size,
  letterSpacing: TYPO.date.tracking.base,
  margin: 0,
  paddingTop: SPACING.datePaddingTop,
  color: COLORS.text,

  '@media': {
    [md.down('sm')]: {
      letterSpacing: TYPO.date.tracking.sm,
    },
  },
});

export const organizer = style({
  display: 'block',
  lineHeight: 1.5,
  fontSize: TYPO.organizer.size,
  margin: '30px 0 0',
  padding: 0,
  color: COLORS.text,
});
