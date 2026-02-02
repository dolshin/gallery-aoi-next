import type { Transform } from 'style-dictionary/types';
import { pxToRem, toPx } from '../utils';

export const transforms: Transform[] = [
  /* Scale(fontSizes, spacing, borderRadius) transforms */
  {
    name: 'scale/rem',
    type: 'value',
    filter: (token) =>
      token.$type === 'fontSizes' ||
      token.$type === 'spacing' ||
      token.$type === 'sizing' ||
      token.$type === 'borderRadius',
    transform: (token) => pxToRem(token.$value),
  },
  /* borderWidth transforms */
  {
    name: 'borderWidth/px',
    type: 'value',
    filter: (token) => token.$type === 'borderWidth',
    transform: (token) => toPx(token.$value),
  },
  /* shadow transforms */
  {
    name: 'shadow/passthrough',
    type: 'value',
    filter: (token) => token.$type === 'shadow' || token.$type === 'boxShadow',
    transform: (token) => token.$value,
  },
  /* Passthrough for other types */
  {
    name: 'passthrough',
    type: 'value',
    filter: (token) =>
      token.$type === 'color' ||
      token.$type === 'fontFamilies' ||
      token.$type === 'fontWeights' ||
      token.$type === 'letterSpacing' ||
      token.$type === 'lineHeights' ||
      token.$type === 'dimension',
    transform: (token) => token.$value,
  },
];
