import { vars } from '@dolshin/theme-contract';
import { style } from '@vanilla-extract/css';
import { input as inputStyles } from '../Input/Input.css';

export const trigger = style([
  inputStyles,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: vars.spacing.stack.md,
    selectors: {
      '&[data-placeholder]': {
        color: vars.input.color.default.placeholder,
      },
      '&[data-disabled]': {
        opacity: 0.5,
        pointerEvents: 'none',
      },
      '&[data-popup-open]': {
        background: vars.color.surface.subtle,
      },
      '&:focus-visible': {
        outline: `2px solid ${vars.color.border.focus}`,
        outlineOffset: -1,
      },
    },
  },
]);

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const positioner = style({});

export const list = style({
  maxHeight: 240,
  overflowY: 'auto',
});

export const itemIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const itemText = style({
  width: '100%',
});

export const popup = style({
  background: vars.input.color.default.bg,
  borderRadius: vars.radius.control,
  border: `1px solid ${vars.input.color.default.border}`,
});

export const item = style({
  display: 'grid',
  gridTemplateColumns: '16px 1fr',
  gap: vars.spacing.grid.gap.md,
  paddingBlock: vars.spacing.stack.xs,
  paddingInline: vars.spacing.stack.md,
  cursor: 'default',
  selectors: {
    '&[data-highlighted]': {
      background: vars.color.accent.primary,
      color: vars.color.text.primary,
    },
    '&[data-disabled]': {
      opacity: 0.4,
    },
  },
});
