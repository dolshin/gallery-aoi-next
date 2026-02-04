import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #ccc',
  padding: '0.5em',
  marginBottom: '1em',
  maxWidth: '600px',
  margin: '0 auto',
});

export const label = style({
  textAlign: 'left',
  padding: '0.5em',
  fontSize: '14px',
  color: 'gray',
});

export const value = style({
  textAlign: 'left',
  marginLeft: '1rem',
  fontSize: '18px',
  padding: '4px 0',
});
