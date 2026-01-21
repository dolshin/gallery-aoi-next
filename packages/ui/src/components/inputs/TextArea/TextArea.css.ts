import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const textAreaRecipe = recipe({
  base: {
    fontFamily: vars.input.text.fontFamily,
    fontSize: vars.input.text.fontSize,
    fontWeight: vars.input.text.fontWeight,
    lineHeight: vars.input.text.lineHeight,
    letterSpacing: vars.input.text.letterSpacing,
    paddingInline: vars.input.spacing.md.paddingInline,
    paddingBlock: vars.input.spacing.md.paddingBlock,
    backgroundColor: vars.input.color.default.bg,
    color: vars.input.color.default.fg,
    borderRadius: vars.radius.control,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.input.color.default.border,
    resize: 'vertical',
    selectors: {
      '&::placeholder': {
        color: vars.input.color.default.placeholder,
      },
      '&:focus-visible': {
        borderColor: vars.input.color.focus.border,
        outline: `${vars.focus.ring.width} solid ${vars.focus.ring.color}`,
        outlineOffset: vars.focus.ring.offset,
      },
      '&:disabled': {
        backgroundColor: vars.input.color.disabled.bg,
        color: vars.input.color.disabled.fg,
        borderColor: vars.input.color.disabled.border,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    resize: {
      none: { resize: 'none' },
      vertical: { resize: 'vertical' },
      horizontal: { resize: 'horizontal' },
      both: { resize: 'both' },
    },
    fullWidth: {
      true: { width: '100%' },
      false: {},
    },
  },
  defaultVariants: { resize: 'vertical', fullWidth: true },
});
