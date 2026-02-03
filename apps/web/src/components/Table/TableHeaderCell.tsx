import clsx from 'clsx';
import * as styles from './Table.css';

export const TableHeaderCell = (
  props: React.ThHTMLAttributes<HTMLTableCellElement>
) => {
  const { className, ...rest } = props;
  return <th className={clsx(styles.tableHeaderCell, className)} {...rest} />;
};
