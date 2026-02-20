import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { buttonRecipe } from './Button.css';

/**
 * ボタンコンポーネントのプロパティ
 */
export type ButtonProps = React.ComponentProps<'button'> &
  RecipeVariants<typeof buttonRecipe> & {
    /**
     * ローディングインジケータを表示する位置
     */
    loadingPosition?: 'left' | 'center' | 'right';
    /**
     * ローディング中インジケーターをカスタマイズする場合に使用
     */
    loadingIndicator?: React.ReactNode;
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
