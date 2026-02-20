import * as styles from './Container.css';
import type { ContainerProps } from './ContainerProps';

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
