import { style, keyframes, createVar } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';
import { navRoot } from '../../Navigation.css';

/* ------------------------------------------------------------
 * Tokens
 * ------------------------------------------------------------ */

const NAV = {
  desktop: {
    top: '128px',
    left: '60px',
    tracking: '0.18em',
    text: '#666',
    active: '#000',
    indicator: '#707070',
    hover: '#11283d',
  },
  mobile: {
    bg: '#11283df2',
    text: '#fff',
    hover: '#444',
    zIndex: 9999,
  },
};

/* ------------------------------------------------------------
 * Animation
 * ------------------------------------------------------------ */

export const fadeIn = keyframes({
  from: { opacity: 0, transform: 'translateY(50px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

/* ------------------------------------------------------------
 * Item (li)
 * ------------------------------------------------------------ */

export const navItem = style({
  '@media': {
    [md.down('lg')]: {
      opacity: 0,
      padding: 'clamp(17px, 3.5vw, 21px)',
      marginBottom: '10px',
      textAlign: 'center',
    },
  },
});

/** CSS Variable*/

export const staggerDelayVar = createVar();

/** Stagger */

export const itemStagger = style({
  selectors: {
    [`${navRoot}[data-state="open"] &`]: {
      animationName: fadeIn,
      animationDuration: '1s',
      animationTimingFunction: 'cubic-bezier(0.075,0.82,0.165,1)',
      animationDelay: staggerDelayVar,
      animationFillMode: 'forwards',
    },
  },
});

/* ------------------------------------------------------------
 * Link (a)
 * ------------------------------------------------------------ */

/* ------------------------------------------------------------
 * Link (a)
 * ------------------------------------------------------------ */

export const navLink = style({
  display: 'block',
  position: 'relative',
  padding: '0.7rem 0.4rem 0.7rem 0.7rem',
  fontWeight: 400,
  textDecoration: 'none',

  /* ---------------- Desktop ---------------- */
  '@media': {
    [md.up('lg')]: {
      color: NAV.desktop.text,

      selectors: {
        '&:hover': {
          color: NAV.desktop.hover,
        },

        /* active / selected */
        '&[data-active="true"]': {
          color: NAV.desktop.active,
        },

        /* Selected indicator */
        '&[data-active="true"]::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '3px',
          height: '1.3em',
          margin: 'auto 0',
          background: NAV.desktop.indicator,
        },
      },
    },

    /* ---------------- Mobile ---------------- */
    [md.down('lg')]: {
      color: NAV.mobile.text,
      letterSpacing: '0.1em',
      fontSize: 'clamp(16px, 3.5vw, 20px)',

      selectors: {
        '&:hover': {
          color: NAV.mobile.hover,
        },
      },
    },
  },
});
