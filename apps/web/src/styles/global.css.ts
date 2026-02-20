import { globalStyle } from '@vanilla-extract/css';

/**
 * Global styles
 */
globalStyle('html', {
  // scrollBehavior: 'smooth',
});

globalStyle('body', {
  isolation: 'isolate',
});

globalStyle('a', {
  textDecoration: 'none',
  color: '#000',
});

globalStyle('ul', {
  padding: 0,
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('p', {
  letterSpacing: '0.05em',
});
