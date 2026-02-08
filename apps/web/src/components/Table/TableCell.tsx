import clsx from 'clsx';
import * as styles from './Table.css';

export const TableCell = (
  props: React.TdHTMLAttributes<HTMLTableCellElement>
) => {
  const { className, ...rest } = props;
  return <td className={clsx(styles.tableCell, className)} {...rest} />;
};
