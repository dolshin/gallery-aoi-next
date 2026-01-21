import { vars } from '@dolshin/theme-contract';
import { style } from '@vanilla-extract/css';

export const input = style({
  width: '100%',
  outline: 'none',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: vars.radius.control,
  fontSize: vars.input.text.fontSize,
  fontWeight: vars.input.text.fontWeight,
  lineHeight: vars.input.text.lineHeight,
  height: vars.input.sizing.md.height,
  paddingInline: vars.input.spacing.md.paddingInline,
  paddingBlock: vars.input.spacing.md.paddingBlock,
  backgroundColor: vars.input.color.default.bg,
  color: vars.input.color.default.fg,
  borderColor: vars.input.color.default.border,
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

    '&[aria-invalid="true"]': {
      borderColor: vars.input.color.error.border,
      color: vars.input.color.error.fg,
    },
  },
});
