import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/**
 * 仮トークン
 */
const MENU = {
  size: '50px',
  radius: '5px',
  zIndex: 9999,
  top: '28px',
  right: '26px',

  line: {
    width: '55%',
    height: '1px',
    left: '14px',
    radius: '2px',
    color: '#666',
    activeColor: '#fff',
    transition: '0.4s',
  },

  label: {
    fontSize: '11px',
    tracking: '0.05em',
  },
} as const;

/* ------------------------------------------------------------
 * Root
 * ------------------------------------------------------------ */

export const menuRoot = style({
  '@media': {
    [md.up('lg')]: {
      display: 'none',
    },

    [md.down('lg')]: {
      position: 'fixed',
      zIndex: MENU.zIndex,
      top: MENU.top,
      right: MENU.right,
      width: MENU.size,
      height: MENU.size,
      border: 'none',
      backgroundColor: 'transparent',
      borderRadius: MENU.radius,
      cursor: 'pointer',
    },
  },
});

/* ------------------------------------------------------------
 * Line (共通)
 * ------------------------------------------------------------ */

export const menuLine = style({
  position: 'absolute',
  left: MENU.line.left,
  width: MENU.line.width,
  height: MENU.line.height,
  borderRadius: MENU.line.radius,
  backgroundColor: MENU.line.color,
  transition: MENU.line.transition,

  selectors: {
    [`${menuRoot}[data-state="open"] &`]: {
      backgroundColor: MENU.line.activeColor,
    },
  },
});

/* ------------------------------------------------------------
 * Line positions
 * ------------------------------------------------------------ */

export const lineTop = style({
  top: '15px',

  selectors: {
    [`${menuRoot}[data-state="open"] &`]: {
      top: '18px',
      left: '18px',
      width: '30%',
      transform: 'translateY(6px) rotate(-45deg)',
    },
  },
});

export const lineMiddle = style({
  top: '25px',

  selectors: {
    [`${menuRoot}[data-state="open"] &`]: {
      opacity: 0,
    },
  },
});

export const lineBottom = style({
  top: '36px',

  selectors: {
    [`${menuRoot}[data-state="open"] &`]: {
      top: '30px',
      left: '18px',
      width: '30%',
      transform: 'translateY(-6px) rotate(45deg)',
    },
  },
});

/* ------------------------------------------------------------
 * Label（Menu / Close）
 * ------------------------------------------------------------ */

export const menuLabel = style({
  position: 'absolute',
  top: '5px',
  left: '-1px',
  fontSize: MENU.label.fontSize,
  letterSpacing: MENU.label.tracking,
  textTransform: 'uppercase',
  color: MENU.line.color,
  transition: MENU.line.transition,

  selectors: {
    [`${menuRoot}[data-state="open"] &`]: {
      color: MENU.line.activeColor,
      transform: 'rotate(-45deg)',
      left: '4px',
    },
  },
});
