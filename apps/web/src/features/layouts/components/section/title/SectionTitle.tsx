import * as styles from './SectionTitle.css';
import type { SectionTitleProps } from './SectionTitleProps';
import clsx from 'clsx';

export const SectionTitle = ({
  title,
  subTitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={clsx(styles.titleWrapper, className)}>
      <span className={styles.subTitle}>{subTitle}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
