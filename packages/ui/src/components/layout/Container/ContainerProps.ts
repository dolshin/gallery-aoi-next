import type { HTMLAttributes } from 'react';
import { containerRecipe } from './Container.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  RecipeVariants<typeof containerRecipe>;
