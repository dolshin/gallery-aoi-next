import { stackRecipe } from './Stack.css';
import clsx from 'clsx';
import type { StackProps } from './StackProps';

/**
 * スタックレイアウトコンポーネント
 */
export function Stack({
  direction,
  spacing,
  align,
  justify,
  wrap,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={clsx(
        stackRecipe({ direction, spacing, align, justify, wrap }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
