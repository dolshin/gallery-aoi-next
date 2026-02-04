import type { NavigationItem } from '../../../../_config/navigation';

export type NavigationListProps = {
  items: readonly NavigationItem[];
  handleMenuClick: () => void;
};
