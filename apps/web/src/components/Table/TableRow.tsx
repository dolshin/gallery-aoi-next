import clsx from 'clsx';
import * as styles from './Table.css';

export const TableRow = (props: React.HTMLAttributes<HTMLTableRowElement>) => {
  const { className, ...rest } = props;
  return <tr className={clsx(styles.tableRow, className)} {...rest} />;
};
