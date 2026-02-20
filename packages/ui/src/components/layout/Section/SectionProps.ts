import * as React from 'react';
import type { sectionRecipe } from './Section.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type SectionProps = React.HTMLAttributes<HTMLElement> &
  RecipeVariants<typeof sectionRecipe> & {
    as?: 'section' | 'div' | 'main';
  };
