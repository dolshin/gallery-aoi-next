import { style } from '@vanilla-extract/css';
import type { Breakpoint, ResponsiveCols } from './types';

const breakpoints: Record<Exclude<Breakpoint, 'base'>, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export function gridColsStyle(cols: ResponsiveCols) {
  if (typeof cols === 'number') {
    return style({
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    });
  }

  const baseCols = cols.base ?? 1;

  return style({
    gridTemplateColumns: `repeat(${baseCols}, minmax(0, 1fr))`,
    '@media': Object.fromEntries(
      Object.entries(breakpoints)
        .filter(([bp]) => cols[bp as Breakpoint])
        .map(([bp, minWidth]) => [
          `screen and (min-width: ${minWidth})`,
          {
            gridTemplateColumns: `repeat(${cols[bp as Breakpoint]}, minmax(0, 1fr))`,
          },
        ]),
    ),
  });
}
