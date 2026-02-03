import clsx from 'clsx';
import * as styles from './Table.css';

export const TableBody = (
  props: React.HTMLAttributes<HTMLTableSectionElement>
) => {
  const { className, ...rest } = props;
  return <tbody className={clsx(styles.tableBody, className)} {...rest} />;
};
