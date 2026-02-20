import * as React from 'react';
import type { ResponsiveCols } from './types';

export type GridProps = React.HTMLAttributes<HTMLElement> & {
  /** 列数またはレスポンシブ列数設定 */
  cols?: ResponsiveCols;

  /** ギャップサイズ */
  gap?: 'sm' | 'md' | 'lg' | 'xl';

  /** レンダリングするHTML要素の種類 */
  as?: 'div' | 'ul' | 'ol' | 'section';
};
