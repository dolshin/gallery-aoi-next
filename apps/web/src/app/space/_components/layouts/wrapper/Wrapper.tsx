import * as styles from './Wrapper.css';
import type { WrapperProps } from './WrapperProps';

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
