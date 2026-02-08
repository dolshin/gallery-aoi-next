'use client';
import { Pagination } from '@dolshin/ui';
import { EventList } from '../list';
import type { PaginatedEventListProps } from './PaginatedEventListProps';
import { usePaginatedEventList } from './usePaginatedEventList';

export const PaginatedEventList = ({
  data,
  pageContext,
}: PaginatedEventListProps) => {
  const { onPageChange } = usePaginatedEventList();
  return (
    <>
      <EventList events={data} />
      <Pagination
        totalPages={pageContext.totalPages}
        currentPage={pageContext.currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};
