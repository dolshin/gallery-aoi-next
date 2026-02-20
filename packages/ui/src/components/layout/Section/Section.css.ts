import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const sectionRecipe = recipe({
  base: {
    width: '100%',
  },

  variants: {
    spacing: {
      sm: {
        paddingBlock: vars.spacing.section.block.sm,
      },
      md: {
        paddingBlock: vars.spacing.section.block.md,
      },
      lg: {
        paddingBlock: vars.spacing.section.block.lg,
      },
    },

    tone: {
      default: {},
      muted: {
        backgroundColor: vars.color.surface.subtle,
      },
      primary: {
        backgroundColor: vars.color.accent.primary,
        color: vars.color.text.inverse,
      },
    },
  },

  defaultVariants: {
    spacing: 'md',
    tone: 'default',
  },
});
