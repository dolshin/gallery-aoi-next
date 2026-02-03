import type { MenuProps } from './MenuProps';
import * as styles from './Menu.css';
import { MenuItem } from './item';
import clsx from 'clsx';

export const Menu = ({ label, items, className }: MenuProps) => {
  return (
    <aside className={clsx(styles.aside, className)}>
      <h3
        className={styles.heading}
        style={{
          margin: 0,
          position: 'relative',
          fontSize: '1em',
          fontWeight: 'normal',
          padding: '.5em 2.5em .5em 1.3em',
          background: 'transparent',
          border: '1px solid #dadada',
          cursor: 'pointer',
        }}
      >
        {label}
      </h3>
      <ul className={styles.menuList}>
        {items.map((item) => (
          <MenuItem key={item.label} href={item.href} label={item.label} />
        ))}
      </ul>
    </aside>
  );
};
