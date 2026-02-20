import { SectionTitle } from '../section/title/SectionTitle';
import type { PageLayoutProps } from './PageLayoutProps';
import * as styles from './PageLayout.css';
import clsx from 'clsx';

export const PageLayout = ({
  title,
  subTitle,
  className,
  children,
}: PageLayoutProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <SectionTitle
        title={title}
        subTitle={subTitle}
        className={styles.title}
      />
      <div>{children}</div>
    </div>
  );
};
