import type { FaqListItemType } from './types';

export type FaqListItemProps = {
  item: FaqListItemType;
  isOpen: boolean;
  index: number;
  toggle: (index: number) => void;
};
