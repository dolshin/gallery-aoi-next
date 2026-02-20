/**
 * ブランドアイコンのプロップス
 */
export type BrandIconProps = {
  /** アイコンサイズ */
  size?: number | string;

  /** スタイルを拡張するための CSSクラス */
  className?: string;

  /** アクセシビリティ用 */
  title?: string;

  /** aria-label を明示したい場合 */
  'aria-label'?: string;
};
