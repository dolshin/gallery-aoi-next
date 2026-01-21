import * as React from 'react';
import { chipRecipe } from './Chip.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type ChipProps = RecipeVariants<typeof chipRecipe> & {
  /** チップのラベル */
  children: React.ReactNode;

  /** ref属性 */
  ref?: React.Ref<HTMLSpanElement>;

  /** クリック時のハンドラ */
  onClick?: () => void;

  /** スタイル拡張用 */
  className?: string;
};
