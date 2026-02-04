import { EquipmentListItem } from './item';
import * as styles from './EquipmentList.css';
import type { EquipmentListProps } from './EquipmentListProps';

export const EquipmentList = (equipmentListItems: EquipmentListProps) => {
  return (
    <div className={styles.equipmentWrapper}>
      <div className={styles.equipmentListLayout}>
        <ul className={styles.equipmentList}>
          {equipmentListItems['col1'].map((item, index) => (
            <EquipmentListItem item={item} key={index} />
          ))}
        </ul>
        <ul className={styles.equipmentList}>
          {equipmentListItems['col2'].map((item, index) => (
            <EquipmentListItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
