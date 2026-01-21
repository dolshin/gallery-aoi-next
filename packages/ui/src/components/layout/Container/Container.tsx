import { containerRecipe } from './Container.css';
import clsx from 'clsx';
import type { ContainerProps } from './ContainerProps';

/**
 * コンテナレイアウトコンポーネント
 */
export const Container = ({
  size,
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div className={clsx(containerRecipe({ size }), className)} {...props}>
      {children}
    </div>
  );
};
