import clsx from 'clsx';
import * as styles from './Table.css';

export const Table = (props: React.TableHTMLAttributes<HTMLTableElement>) => {
  const { className, ...rest } = props;
  return <table className={clsx(styles.table, className)} {...rest} />;
};
