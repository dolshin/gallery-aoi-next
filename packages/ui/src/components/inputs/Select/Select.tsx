'use client';
import { Select as BaseSelect } from '@base-ui/react/select';
import * as styles from './Select.css';
import type { SelectProps } from './SelectProps';
import { ChevronDown } from '@dolshin/icons';

/**
 * セレクトコンポーネント
 */
export const Select = <
  Value = string,
  Multiple extends boolean | undefined = false,
>({
  items,
  container,
  multiple,
  placeholder,
  itemToStringValue,
  itemToStringLabel,
  disabled,
  readOnly,
  ...rootProps
}: SelectProps<Value, Multiple>) => {
  return (
    <BaseSelect.Root
      items={items}
      multiple={multiple}
      disabled={disabled}
      readOnly={readOnly}
      itemToStringValue={itemToStringValue}
      itemToStringLabel={itemToStringLabel}
      {...rootProps}
    >
      <BaseSelect.Trigger className={styles.trigger}>
        <BaseSelect.Value placeholder={placeholder} />
        <BaseSelect.Icon className={styles.icon}>
          <ChevronDown />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal container={container}>
        <BaseSelect.Positioner className={styles.positioner} sideOffset={8}>
          <BaseSelect.Popup className={styles.popup}>
            <BaseSelect.List className={styles.list}>
              {items.map((item) => (
                <BaseSelect.Item
                  key={String(item.value)}
                  value={item.value}
                  className={styles.item}
                >
                  <BaseSelect.ItemIndicator
                    className={styles.itemIndicator}
                    keepMounted
                  >
                    ✓
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className={styles.itemText}>
                    {item.label}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
};
