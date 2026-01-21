import { style } from '@vanilla-extract/css';
import { vars } from '@dolshin/theme-contract';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.stack.xs,
});

export const label = style({
  fontFamily: vars.typography.inline.md.fontFamily,
  fontSize: vars.typography.inline.md.fontSize,
  fontWeight: vars.typography.inline.md.fontWeight,
  lineHeight: vars.typography.inline.md.lineHeight,
  color: vars.color.text.primary,
});

export const requiredMark = style({
  marginLeft: vars.spacing.stack.xs,
  color: vars.color.status.error,
});

export const supportingText = style({
  fontFamily: vars.typography.body.sm.fontFamily,
  fontSize: vars.typography.body.sm.fontSize,
  lineHeight: vars.typography.body.sm.lineHeight,
  color: vars.color.text.primary,
});

export const errorText = style({
  fontFamily: vars.typography.body.sm.fontFamily,
  fontSize: vars.typography.body.sm.fontSize,
  lineHeight: vars.typography.body.sm.lineHeight,
  color: vars.color.status.error,
});
