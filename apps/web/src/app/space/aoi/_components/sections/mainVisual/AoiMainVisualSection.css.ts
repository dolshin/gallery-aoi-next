import { style } from '@vanilla-extract/css';
import { md } from '@/styles/mediaQuery';

/** Tokens（仮：後で design tokens に昇格）*/

const MAIN_VISUAL = {
  zIndex: 1,
};

const TITLE = {
  fontFamily: "'Montserrat Variable', sans-serif",
  fontWeight: 300,
};

const CATCH = {
  color: '#000',
  paddingLeft: '10px',
  lineHeight: 2.5,
};

const SLIDER = {
  margin: {
    desktop: '70px 0 0',
    mobile: '40px 0 0',
  },
};

/** Section */

export const section = style({
  padding: 0,
  '@media': {
    [md.up('lg')]: { marginTop: '80px' },
    [md.down('lg')]: { marginTop: '130px' },
  },
});

/** MainVisual Wrapper*/

export const mainVisualWrapper = style({
  position: 'relative',

  '@media': {
    [md.up('lg')]: {
      zIndex: MAIN_VISUAL.zIndex,
    },
  },
});

/** Title*/

export const mainVisualTitle = style({
  margin: 0,
  fontFamily: TITLE.fontFamily,
  fontWeight: TITLE.fontWeight,

  '@media': {
    [md.up('lg')]: {
      fontSize: 'clamp(31px, 3.5vw, 50px)',
      letterSpacing: '0.1em',
    },

    [md.between('md', 'lg')]: {
      fontSize: 'clamp(24px, 4.4vw, 36px)',
      letterSpacing: '0.1em',
    },

    [md.between('sm', 'md')]: {
      fontSize: 'clamp(28px, 5.4vw, 41px)',
      letterSpacing: '0.12em',
      lineHeight: 1.8,
    },

    [md.down('sm')]: {
      fontSize: 'clamp(22px, 6.5vw, 48px)',
      lineHeight: 2,
      fontWeight: 300,
    },
  },
});

/** Catch Phrase Base*/

const catchPhraseBase = {
  color: CATCH.color,
  paddingLeft: CATCH.paddingLeft,
  lineHeight: CATCH.lineHeight,
} as const;

/** Catch Phrase 1*/

export const catchPhrasePrimary = style({
  ...catchPhraseBase,

  '@media': {
    [md.up('lg')]: {
      fontSize: 'clamp(15px, 1.15vw, 20px)',
      letterSpacing: '0.05em',
      margin: '70px 0 0',
    },

    [md.between('md', 'lg')]: {
      fontSize: 'clamp(17px, 4vw, 18px)',
      letterSpacing: '0.05em',
      margin: '70px 0 0',
    },

    [md.between('sm', 'md')]: {
      fontSize: 'clamp(16px, 4vw, 17px)',
      letterSpacing: '0.1em',
      margin: '40px 0 0',
    },

    [md.down('sm')]: {
      fontSize: 'clamp(15px, 4vw, 16px)',
      letterSpacing: '0.07em',
      margin: '40px 0 0',
    },
  },
});

/** Catch Phrase 2*/

export const catchPhraseSecondary = style({
  ...catchPhraseBase,

  '@media': {
    [md.up('lg')]: {
      fontSize: 'clamp(15px, 1.15vw, 20px)',
      letterSpacing: '0.05em',
      margin: '50px 0 0',
    },

    [md.between('md', 'lg')]: {
      fontSize: 'clamp(17px, 4vw, 18px)',
      letterSpacing: '0.1em',
      margin: '50px 0 0',
    },

    [md.between('sm', 'md')]: {
      fontSize: 'clamp(16px, 4vw, 17px)',
      letterSpacing: '0.1em',
      margin: '40px 0 0',
    },

    [md.down('sm')]: {
      fontSize: 'clamp(15px, 4vw, 16px)',
      letterSpacing: '0.07em',
      margin: '40px 0 0',
    },
  },
});

/** Gallery Slider Wrapper*/

export const gallerySliderWrapper = style({
  overflow: 'hidden',

  '@media': {
    [md.up('lg')]: {
      margin: SLIDER.margin.desktop,
    },

    [md.down('lg')]: {
      margin: SLIDER.margin.mobile,
    },
  },
});
