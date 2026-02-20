import * as React from 'react';
import { clsx } from 'clsx';
import { typographyRecipe } from './Typography.css';
import type { TypographyProps } from './TypographyProps';

export const Typography = <T extends React.ElementType = 'p'>({
  as,
  variant = 'body-md',
  tone = 'default',
  align = 'left',
  ref,
  truncate = false,
  className,
  ...props
}: TypographyProps<T>) => {
  const Component = (as ?? 'p') as React.ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        typographyRecipe({ variant, tone, align, truncate }),
        className
      )}
      {...props}
    />
  );
};

Typography.displayName = 'Typography';
