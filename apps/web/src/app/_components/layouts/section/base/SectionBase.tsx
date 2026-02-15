import { Section } from '@dolshin/ui';
import type { SectionBaseProps } from './SectionBaseProps';

export const SectionBase = ({ children, id, className }: SectionBaseProps) => {
  return (
    <Section id={id} className={className}>
      {children}
    </Section>
  );
};
