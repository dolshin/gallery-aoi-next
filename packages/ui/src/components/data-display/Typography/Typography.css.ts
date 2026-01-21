import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const typographyRecipe = recipe({
  base: {
    margin: 0,
  },

  variants: {
    variant: {
      // Heading
      'heading-2xl': {
        fontSize: vars.typography.heading['2xl'].fontSize,
        lineHeight: vars.typography.heading['2xl'].lineHeight,
        fontWeight: vars.typography.heading['2xl'].fontWeight,
      },
      'heading-xl': {
        fontSize: vars.typography.heading.xl.fontSize,
        lineHeight: vars.typography.heading.xl.lineHeight,
        fontWeight: vars.typography.heading.xl.fontWeight,
      },
      'heading-md': {
        fontSize: vars.typography.heading.md.fontSize,
        lineHeight: vars.typography.heading.md.lineHeight,
        fontWeight: vars.typography.heading.md.fontWeight,
      },
      'heading-sm': {
        fontSize: vars.typography.heading.sm.fontSize,
        lineHeight: vars.typography.heading.sm.lineHeight,
        fontWeight: vars.typography.heading.sm.fontWeight,
      },

      // Body
      'body-md': {
        fontSize: vars.typography.body.md.fontSize,
        lineHeight: vars.typography.body.md.lineHeight,
        fontWeight: vars.typography.body.md.fontWeight,
      },
      'body-sm': {
        fontSize: vars.typography.body.sm.fontSize,
        lineHeight: vars.typography.body.sm.lineHeight,
        fontWeight: vars.typography.body.sm.fontWeight,
      },

      // Inline
      'inline-md': {
        fontSize: vars.typography.inline.md.fontSize,
        lineHeight: vars.typography.inline.md.lineHeight,
        fontWeight: vars.typography.inline.md.fontWeight,
        letterSpacing: vars.typography.inline.md.letterSpacing,
      },
      'inline-sm': {
        fontSize: vars.typography.inline.sm.fontSize,
        lineHeight: vars.typography.inline.sm.lineHeight,
        fontWeight: vars.typography.inline.sm.fontWeight,
        letterSpacing: vars.typography.inline.sm.letterSpacing,
      },
    },

    tone: {
      default: { color: vars.color.text.primary },
      muted: { color: vars.color.text.muted },
      subtle: { color: vars.color.text.secondary },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    truncate: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },

  defaultVariants: {
    variant: 'body-md',
    tone: 'default',
    align: 'left',
  },
});
