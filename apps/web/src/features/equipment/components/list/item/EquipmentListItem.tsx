import type { EquipmentListItemProps } from './EquipmentListItemProps';

export const EquipmentListItem = ({ item }: EquipmentListItemProps) => {
  return (
    <li
      style={{
        listStyle: 'disc',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>{item.name}</p>
        {item.count && (
          <>
            <span
              style={{
                width: '5%',
                height: '1px',
                background: 'black',
              }}
            />
            <p>{item.count}</p>
          </>
        )}
      </div>
    </li>
  );
};
