import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const containerRecipe = recipe({
  base: {
    width: '100%',
    marginInline: 'auto',

    // mobile first
    maxWidth: vars.spacing.container.inline.sm.maxWidth,
    paddingInline: vars.spacing.container.inline.sm.paddingInline,

    '@media': {
      'screen and (min-width: 640px)': {
        maxWidth: vars.spacing.container.inline.md.maxWidth,
        paddingInline: vars.spacing.container.inline.md.paddingInline,
      },

      'screen and (min-width: 1024px)': {
        maxWidth: vars.spacing.container.inline.lg.maxWidth,
        paddingInline: vars.spacing.container.inline.lg.paddingInline,
      },

      'screen and (min-width: 1280px)': {
        maxWidth: vars.spacing.container.inline.xl.maxWidth,
        paddingInline: vars.spacing.container.inline.xl.paddingInline,
      },
    },
  },
});
