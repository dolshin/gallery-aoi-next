import type { NavigationItem } from '../../../../../_config/navigation';

export type NavigationListItemProps = {
  item: NavigationItem;
  isActiveItem: boolean;
  handleMenuClick: () => void;
  index: number;
};
