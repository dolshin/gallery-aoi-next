import clsx from 'clsx';
import { gridRecipe } from './Grid.css';
import { gridColsStyle } from './gridCols';
import type { GridProps } from './GridProps';

/**
 * グリッドレイアウトコンポーネント
 */
export const Grid = ({
  as = 'div',
  cols = 1,
  gap = 'md',
  className,
  ...props
}: GridProps) => {
  const Component = as;
  return (
    <Component
      className={clsx(gridRecipe({ gap }), gridColsStyle(cols), className)}
      {...props}
    />
  );
};
