/**
 *ハンバーガーメニューのプロパティ
 */
export type HambergerMenuProps = {
  /** メニューの開閉状態 */
  isOpen: boolean;
  /** メニューの開閉を切り替える関数 */
  toggleMenu: () => void;
};
