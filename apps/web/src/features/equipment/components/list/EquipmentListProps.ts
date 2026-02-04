import type { EquipmentListItemType } from './item';

export type EquipmentListProps = {
  items: {
    col1: EquipmentListItemType[];
    col2: EquipmentListItemType[];
  };
};
