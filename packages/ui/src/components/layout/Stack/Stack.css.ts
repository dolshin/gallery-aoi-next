import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const stackRecipe = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },

    spacing: {
      xs: { gap: vars.spacing.stack.xs },
      md: { gap: vars.spacing.stack.md },
      lg: { gap: vars.spacing.stack.lg },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },

    wrap: {
      no: { flexWrap: 'nowrap' },
      yes: { flexWrap: 'wrap' },
    },
  },

  defaultVariants: {
    direction: 'vertical',
    spacing: 'md',
    wrap: 'no',
  },
});
