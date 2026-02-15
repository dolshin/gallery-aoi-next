import * as styles from './SectionContents.css';
import type { SectionContentsProps } from './SectionContentsProps';

export const SectionContents = ({ children }: SectionContentsProps) => {
  return <div className={styles.contents}>{children}</div>;
};
