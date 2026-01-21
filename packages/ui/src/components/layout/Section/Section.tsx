import clsx from 'clsx';
import type { SectionProps } from './SectionProps';
import { sectionRecipe } from './Section.css';

/**
 * セクションレイアウトコンポーネント
 */
export const Section = ({
  as = 'section',
  spacing,
  tone,
  className,
  ...props
}: SectionProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(sectionRecipe({ spacing, tone }), className)}
      {...props}
    />
  );
};
