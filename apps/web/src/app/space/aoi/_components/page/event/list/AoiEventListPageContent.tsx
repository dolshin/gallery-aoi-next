import { fetchPaginatedEvents } from '@/features/event/lib/microcms/functions';
import { EVENTS_PER_PAGE } from '../../../../event/constants';
import { AoiEventListTemplate } from '../../../template/event/list';
import type { AoiEventListPageContentProps } from './AoiEventListPageContentProps';

/**
 * イベント一覧ページコンテンツコンポーネント
 */
export async function AoiEventListPageContent({
  page,
}: AoiEventListPageContentProps) {
  const currentPage = Number(page);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    throw new Error('Invalid page parameter');
  }

  const offset = (currentPage - 1) * EVENTS_PER_PAGE;

  const data = await fetchPaginatedEvents({
    limit: EVENTS_PER_PAGE,
    offset,
    orders: {
      key: 'publishedAt',
      direction: 'desc',
    },
  });

  const totalPages = Math.ceil(data.totalCount / EVENTS_PER_PAGE);
  return (
    <AoiEventListTemplate
      data={data.contents}
      pageContext={{
        totalPages,
        currentPage,
      }}
    />
  );
}
