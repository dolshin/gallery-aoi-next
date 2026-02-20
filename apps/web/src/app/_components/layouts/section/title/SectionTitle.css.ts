import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン（後で vars に差し替える前提）
 */
const TITLE_FONT_FAMILY = "'Montserrat Variable', sans-serif";
const SUB_TITLE_FONT_FAMILY = 'serif';
const SUB_TITLE_COLOR = '#cfcfcf';

const titleTypography = {
  title: {
    lg: { size: '1.6rem', tracking: '0em' },
    md: { size: '1.6rem', tracking: '0.1em' },
    sm: { size: '1.4rem', tracking: '0.1em' },
    xs: { size: '1.3rem', tracking: '0.07em' },
  },
  sub: {
    lg: { size: '2rem', tracking: '0em' },
    md: { size: '2.1rem', tracking: '0.03em' },
    sm: { size: '1.9rem', tracking: '0.03em' },
    xs: { size: '1.6rem', tracking: '0.03em' },
  },
} as const;

/**
 * Styles
 */

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
  position: 'relative',
});

export const title = style({
  textAlign: 'center',
  fontWeight: 500,
  margin: 0,
  fontFamily: TITLE_FONT_FAMILY,

  '@media': {
    [md.up('lg')]: {
      fontSize: titleTypography.title.lg.size,
      letterSpacing: titleTypography.title.lg.tracking,
    },
    [md.between('md', 'lg')]: {
      fontSize: titleTypography.title.md.size,
      letterSpacing: titleTypography.title.md.tracking,
    },
    [md.between('sm', 'md')]: {
      fontSize: titleTypography.title.sm.size,
      letterSpacing: titleTypography.title.sm.tracking,
    },
    [md.down('sm')]: {
      fontSize: titleTypography.title.xs.size,
      letterSpacing: titleTypography.title.xs.tracking,
    },
  },
});

export const subTitle = style({
  width: 'max-content',
  fontStyle: 'italic',
  letterSpacing: '0.03em',
  color: SUB_TITLE_COLOR,
  fontFamily: SUB_TITLE_FONT_FAMILY,
  '@media': {
    [md.up('lg')]: {
      fontSize: titleTypography.sub.lg.size,
      letterSpacing: titleTypography.sub.lg.tracking,
    },
    [md.between('md', 'lg')]: {
      fontSize: titleTypography.sub.md.size,
      letterSpacing: titleTypography.sub.md.tracking,
    },
    [md.between('sm', 'md')]: {
      fontSize: titleTypography.sub.sm.size,
      letterSpacing: titleTypography.sub.sm.tracking,
    },
    [md.down('sm')]: {
      fontSize: titleTypography.sub.xs.size,
      letterSpacing: titleTypography.sub.xs.tracking,
    },
  },
});
