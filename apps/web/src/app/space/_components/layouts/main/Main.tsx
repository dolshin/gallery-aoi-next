import type { MainProps } from './MainProps';
import * as styles from './Main.css';

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
