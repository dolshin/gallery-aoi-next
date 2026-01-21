import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const chipRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.pill,
    border: vars.color.border.default,
    borderStyle: 'solid',
    borderWidth: '1px',
    fontFamily: vars.typography.inline.sm.fontFamily,
    fontSize: vars.typography.inline.sm.fontSize,
    lineHeight: vars.typography.inline.sm.lineHeight,
    fontWeight: vars.typography.inline.sm.fontWeight,
    letterSpacing: vars.typography.inline.sm.letterSpacing,
    paddingInline: vars.spacing.stack.sm,
    paddingBlock: vars.spacing.stack.xs,
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      default: {
        background: vars.color.surface.base,
        color: vars.color.text.primary,
      },
      primary: {
        background: vars.color.accent.primary,
        color: vars.color.text.inverse,
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
        selectors: {
          '&:hover': {
            background: vars.color.surface.subtle,
            color: vars.color.text.primary,
          },
          '&:focus-visible': {
            outline: `${vars.focus.ring.width} solid ${vars.focus.ring.color}`,
            outlineOffset: vars.focus.ring.offset,
          },
        },
      },
      false: {},
    },
    size: {
      md: {},
    },
  },
  defaultVariants: {
    variant: 'default',
    clickable: false,
    size: 'md',
  },
});
