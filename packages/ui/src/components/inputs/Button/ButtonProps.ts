import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { buttonRecipe } from './Button.css';

/**
 * ボタンコンポーネントのプロパティ
 */
export type ButtonProps = React.ComponentProps<'button'> &
  RecipeVariants<typeof buttonRecipe> & {
    /**
     * ボタンの左側に表示するアイコン
     */
    leftIcon?: React.ReactNode;
    /**
     * ボタンの右側に表示するアイコン
     */
    rightIcon?: React.ReactNode;
    /**
     * 子要素をそのままレンダリングするかどうか
     */
    asChild?: boolean;
  };
