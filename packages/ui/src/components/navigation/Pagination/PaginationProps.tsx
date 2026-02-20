export type PaginationProps = {
  /** 総ページ数 */
  totalPages: number;

  /** 現在のページ番号 */
  currentPage: number;

  /** ページ変更時のコールバック関数 */
  onPageChange: (page: number) => void;

  /** 現在ページの左右に何個表示するか */
  siblingCount?: number;

  /** 先頭・末尾を何個固定表示するか */
  boundaryCount?: number;

  /** 無効化 */
  disabled?: boolean;
};
