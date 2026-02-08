import type { PaginationProps } from './PaginationProps';

type PaginationItem = number | 'start-ellipsis' | 'end-ellipsis';

type UsePaginationArgs = Pick<
  PaginationProps,
  'totalPages' | 'currentPage' | 'siblingCount' | 'boundaryCount'
>;

/**
 * ellipsis（…）を出す意味が生じる最小の「飛び」
 * - 境界の次のページをそのまま出せるなら ellipsis は不要
 * - 2ページ以上飛ぶ場合にのみ ellipsis を表示する
 */
const MIN_GAP_FOR_ELLIPSIS = 2;

/**
 * 表示される ... は最大2つ
 */
const MAX_ELLIPSIS_COUNT = 2;

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export function usePagination({
  totalPages,
  currentPage,
  siblingCount = 1,
  boundaryCount = 1,
}: UsePaginationArgs) {
  // ex)  [b b ・・・ s s s c s s s ・・・ b b]
  // ( b = boundaryCount , s = siblingCount , c = currentPage )
  const totalNumbersToShow = boundaryCount * 2 + siblingCount * 2 + 1;

  // 数字 + ellipsis（最大2）を含めた、UI上の最大ブロック数

  const totalBlocks = totalNumbersToShow + MAX_ELLIPSIS_COUNT;

  if (totalPages <= totalBlocks) {
    return { items: range(1, totalPages) as PaginationItem[] };
  }

  const leftSibling = Math.max(
    currentPage - siblingCount,
    boundaryCount + MIN_GAP_FOR_ELLIPSIS,
  );

  const rightSibling = Math.min(
    currentPage + siblingCount,
    totalPages - boundaryCount - (MIN_GAP_FOR_ELLIPSIS - 1),
  );

  const showStartEllipsis =
    currentPage - siblingCount > boundaryCount + MIN_GAP_FOR_ELLIPSIS;

  const showEndEllipsis =
    currentPage + siblingCount <
    totalPages - boundaryCount - (MIN_GAP_FOR_ELLIPSIS - 1);

  const startPages = range(1, boundaryCount);
  const endPages = range(totalPages - boundaryCount + 1, totalPages);

  const middlePages = range(leftSibling, rightSibling);

  const items: PaginationItem[] = [];

  // 先頭固定
  items.push(...startPages);

  // 先頭から中央
  if (showStartEllipsis) {
    items.push('start-ellipsis');
  } else {
    const extra = range(boundaryCount + 1, leftSibling - 1);
    items.push(...extra);
  }

  // 中央
  items.push(...middlePages);

  // 中央から末尾
  if (showEndEllipsis) {
    items.push('end-ellipsis');
  } else {
    const extra = range(rightSibling + 1, totalPages - boundaryCount);
    items.push(...extra);
  }

  // 末尾固定
  items.push(...endPages);

  return { items };
}
