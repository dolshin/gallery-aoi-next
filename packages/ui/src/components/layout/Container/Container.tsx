import type { ContainerProps } from './ContainerProps';

/**
 * コンテナレイアウトコンポーネント
 */
export const Container = ({
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
