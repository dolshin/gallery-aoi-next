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
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
};
