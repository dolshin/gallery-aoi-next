import { style } from '@vanilla-extract/css';
import { vars } from '@dolshin/theme-contract';

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  margin: '80px 0',
  listStyle: 'none',
  padding: 0,
});

export const circleButton = style({
  display: 'inline-block',
  textDecoration: 'none',
  textAlign: 'center',
  border: 'none',
  padding: `18px 0`,
  margin: `0 10px 0 0`,
  lineHeight: '1rem',
  width: '55px',
  height: '55px',
  borderRadius: vars.radius.pill,
  cursor: 'pointer',
  color: vars.color.text.inverse,
  backgroundColor: vars.color.accent.primary,
});

export const selected = style({
  backgroundColor: vars.color.accent.secondary,
});

export const ellipsis = style({
  paddingInline: 8,
});
