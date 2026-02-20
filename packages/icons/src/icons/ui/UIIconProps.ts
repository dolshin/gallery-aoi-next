import React from 'react';

/**
 * UI アイコンのプロップス
 */
export type UIIconProps = React.SVGAttributes<SVGElement> & {
  /** サイズ */
  size?: number | string;

  /** ストローク幅 */
  strokeWidth?: number;

  /** 装飾用かどうか */
  decorative?: boolean; // true → aria-hidden

  /** スタイルを拡張するための CSSクラス */
  className?: string;

  /** アクセシビリティ用 */
  title?: string;
};
