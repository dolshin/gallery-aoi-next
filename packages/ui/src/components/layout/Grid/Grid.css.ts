import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

/**
 *  Grid スタイル
 */
export const gridRecipe = recipe({
  base: {
    display: 'grid',
    width: '100%',
  },

  variants: {
    gap: {
      sm: { gap: vars.spacing.grid.gap.sm },
      md: { gap: vars.spacing.grid.gap.md },
      lg: { gap: vars.spacing.grid.gap.lg },
      xl: { gap: vars.spacing.grid.gap.xl },
    },
  },

  defaultVariants: {
    gap: 'md',
  },
});
