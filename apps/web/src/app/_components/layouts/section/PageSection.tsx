import { SectionTitle } from './title';
import { SectionContents } from './contents';
import * as styles from './PageSection.css';
import type { PageSectionProps } from './PageSectionProps';
import { SectionBase } from './base';
import clsx from 'clsx';

export const PageSection = ({
  children,
  title,
  subTitle,
  id,
  className,
}: PageSectionProps) => {
  return (
    <SectionBase id={id} className={clsx(styles.section, className)}>
      <SectionTitle title={title} subTitle={subTitle} />
      <SectionContents>{children}</SectionContents>
    </SectionBase>
  );
};
