import { style } from '@vanilla-extract/css';

/**
 * 仮トークン（後で design tokens に昇格）
 */
const ASIDE = {
  width: '160px',
  arrow: {
    size: '0.3em',
    color: '#3b3b3b',
    offsetRight: '1em',
    transition: 'all 0.5s',
  },
  menu: {
    topClosed: '80%',
    topOpen: '100%',
    width: '50vw',
    bg: '#666',
    textColor: 'white',
    padding: '1em 1.5em',
    fontSize: '15px',
    tracking: '0.08em',
    transition: 'all 0.3s',
  },
};

/**
 * Parent: aside
 */
export const aside = style({
  position: 'relative',
  width: ASIDE.width,
});

/**
 * Heading: h3
 * （aside 配下で使われる前提の見出し）
 */
export const heading = style({
  position: 'relative',

  selectors: {
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: ASIDE.arrow.offsetRight,
      bottom: 0,
      width: ASIDE.arrow.size,
      height: ASIDE.arrow.size,
      margin: 'auto',
      borderRight: `2px solid ${ASIDE.arrow.color}`,
      borderBottom: `2px solid ${ASIDE.arrow.color}`,
      transform: 'rotate(45deg)',
      transition: ASIDE.arrow.transition,
    },
  },
});

/**
 * Menu list: ul
 */
export const menuList = style({
  position: 'absolute',
  top: ASIDE.menu.topClosed,
  left: 0,
  zIndex: 1,
  width: ASIDE.menu.width,
  display: 'flex',
  flexWrap: 'wrap',
  visibility: 'hidden',
  opacity: 0,
  transition: ASIDE.menu.transition,
  padding: ASIDE.menu.padding,
  fontSize: ASIDE.menu.fontSize,
  letterSpacing: ASIDE.menu.tracking,
  color: ASIDE.menu.textColor,
  background: ASIDE.menu.bg,

  selectors: {
    /**
     * 親 aside が hover されたときの自分の振る舞い
     */
    [`${aside}:hover &`]: {
      top: ASIDE.menu.topOpen,
      visibility: 'visible',
      opacity: 1,
    },
  },
});
