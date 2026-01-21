import * as React from 'react';
import { typographyRecipe } from './Typography.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type TypographyProps<T extends React.ElementType> = RecipeVariants<
  typeof typographyRecipe
> & {
  as?: T;
  ref?: React.ForwardedRef<HTMLElement>;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'color'>;
