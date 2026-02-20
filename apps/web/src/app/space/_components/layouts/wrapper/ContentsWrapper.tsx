import * as styles from './ContentsWrapper.css';
import type { ContentsWrapperProps } from './ContentsWrapperProps';

export const ContentsWrapper = ({ children }: ContentsWrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
