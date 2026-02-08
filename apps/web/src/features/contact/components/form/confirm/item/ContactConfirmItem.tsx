import type { ContactConfirmItemProps } from './ContactConfirmItemProps';
import * as styles from './ContactConfirmItem.css';

/**
 * お問い合わせ確認項目コンポーネント
 */
export const ContactConfirmItem = ({
  label,
  value,
}: ContactConfirmItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label} </div>
      <div className={styles.value}>{value || '入力なし'}</div>
    </div>
  );
};
