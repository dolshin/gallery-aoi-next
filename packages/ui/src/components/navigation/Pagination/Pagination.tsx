'use client';
import { ChevronLeft, ChevronRight } from '@dolshin/icons/ui';
import type { PaginationProps } from './PaginationProps';
import { usePagination } from './usePagination';
import * as styles from './Pagination.css';
import clsx from 'clsx';

/**
 * ページネーションコンポーネント
 */
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  disabled = false,
}: PaginationProps) => {
  const { items } = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const goTo = (page: number) => {
    if (disabled) return;
    if (page < 1 || page > totalPages) return;
    if (page === currentPage) return;
    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <ul className={styles.root} aria-label="Pagination">
      {/* Prev */}
      <li>
        <button
          type="button"
          className={styles.circleButton}
          onClick={() => goTo(currentPage - 1)}
          disabled={disabled || !hasPrev}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </button>
      </li>

      {/* Pages */}
      {items.map((item, idx) => {
        if (item === 'start-ellipsis' || item === 'end-ellipsis') {
          return (
            <li key={`${item}-${idx}`}>
              <span className={styles.ellipsis} aria-hidden="true">
                …
              </span>
            </li>
          );
        }

        const page = item;
        const selected = page === currentPage;

        return (
          <li key={page}>
            <button
              type="button"
              className={clsx(styles.circleButton, selected && styles.selected)}
              onClick={() => goTo(page)}
              disabled={disabled}
              aria-current={selected ? 'page' : undefined}
              aria-label={
                selected ? `Page ${page}, current page` : `Go to page ${page}`
              }
            >
              {page}
            </button>
          </li>
        );
      })}

      {/* Next */}
      <li>
        <button
          type="button"
          className={styles.circleButton}
          onClick={() => goTo(currentPage + 1)}
          disabled={disabled || !hasNext}
          aria-label="Next page"
        >
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
};
