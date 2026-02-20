import { BASE_FONT_SIZE } from './constants';
import { toNumber } from './toNumber';

export const pxToRem = (px: unknown, base = BASE_FONT_SIZE) =>
  `${toNumber(px) / base}rem`;
