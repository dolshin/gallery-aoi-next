import { toNumber } from './toNumber';

export const toPx = (value: unknown): string => {
  return `${toNumber(value)}px`;
};
