import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { stackRecipe } from './Stack.css';

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  RecipeVariants<typeof stackRecipe>;
