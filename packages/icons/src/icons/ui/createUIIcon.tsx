import React from 'react';
import type { UIIconProps } from './UIIconProps';

/**
 * UI アイコンコンポーネントを作成するための高階関数
 */
export function createUIIcon(Icon: React.FC<React.SVGProps<SVGSVGElement>>) {
  return function UIIcon({
    size = 20,
    strokeWidth = 2,
    decorative = true,
    title,
    className,
    ...rest
  }: UIIconProps) {
    return (
      <Icon
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        aria-hidden={decorative || undefined}
        aria-label={!decorative ? title : undefined}
        role="img"
        className={className}
        {...rest}
      />
    );
  };
}
