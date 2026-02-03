import { style, keyframes } from '@vanilla-extract/css';

/**
 * 仮トークン（後で color / size / z-index tokens に昇格）
 */
const BUTTON = {
  size: '64px',
  bottom: '10px',
  right: '8px',
  zIndex: 9999,
  radius: '50%',
  bg: '#436cc1',
  bgHoverIcon: '#5b88de',
  color: '#fff',
  fontSize: '32px',
} as const;

/**
 * Animation
 */
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

/**
 * Styles
 */

export const buttonRoot = style({
  position: 'fixed',
  zIndex: BUTTON.zIndex,
  bottom: BUTTON.bottom,
  right: BUTTON.right,
  width: BUTTON.size,
  height: BUTTON.size,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: BUTTON.radius,
  border: 'none',
  cursor: 'pointer',

  background: BUTTON.bg,
  color: BUTTON.color,
  fontSize: BUTTON.fontSize,

  opacity: 0,
  pointerEvents: 'none',

  selectors: {
    '&[data-state="visible"]': {
      pointerEvents: 'auto',
      animation: `${fadeIn} 1s ease forwards`,
    },

    '&[data-state="visible"]:hover': {
      background: 'transparent',
    },
  },
});

/* ---------------------------------------
 * Icon
 * -------------------------------------- */

export const buttonIcon = style({
  transition: 'color 0.2s ease',

  selectors: {
    [`${buttonRoot}[data-state="visible"]:hover &`]: {
      color: BUTTON.bgHoverIcon,
    },
  },
});

export const buttonHidden = style({
  display: 'none',
});
