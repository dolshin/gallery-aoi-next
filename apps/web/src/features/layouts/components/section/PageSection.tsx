import { SectionTitle } from './title';
import { SectionContents } from './contents';
import * as styles from './PageSection.css';
import type { PageSectionProps } from './PageSectionProps';
import { SectionBase } from './base';

export const PageSection = ({
  children,
  title,
  subTitle,
  id,
}: PageSectionProps) => {
  return (
    <SectionBase id={id} className={styles.section}>
      <SectionTitle title={title} subTitle={subTitle} />
      <SectionContents>{children}</SectionContents>
    </SectionBase>
  );
};
