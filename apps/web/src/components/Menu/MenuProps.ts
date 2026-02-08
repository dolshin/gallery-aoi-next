import type { MenuItemType } from './item';

export type MenuProps = {
  label: string;
  items: MenuItemType[];
  className?: string;
};
