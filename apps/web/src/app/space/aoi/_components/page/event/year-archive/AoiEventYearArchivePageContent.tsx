import { EVENTS_PER_PAGE } from '../../../../event/constants';
import { fetchPaginatedEvents } from '@/features/event/lib/microcms/functions';
import { notFound } from 'next/navigation';
import type { AoiEventYearArchivePageContentProps } from './AoiEventYearArchivePageContentProps';
import { AoiEventListTemplate } from '../../../template/event/list';

/**
 * 年別イベントアーカイブ一覧ページコンテンツコンポーネント
 */
export async function AoiEventYearArchivePageContent({
  year,
  page,
}: AoiEventYearArchivePageContentProps) {
  const currentPage = Number(page);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const offset = (currentPage - 1) * EVENTS_PER_PAGE;
  const startYear = `${year}-01-01T00:00:00+09:00`;
  const endYear = `${year}-12-31T23:59:59+09:00`;
  const data = await fetchPaginatedEvents({
    limit: EVENTS_PER_PAGE,
    offset: offset,
    orders: { key: 'startDate', direction: 'desc' },
    filters: `startDate[greater_than]${startYear}[and]startDate[less_than]${endYear}`,
  });

  if (data.contents.length === 0) notFound();

  const totalPages = Math.ceil(data.totalCount / EVENTS_PER_PAGE);

  return (
    <AoiEventListTemplate
      pageContext={{ currentPage, totalPages, year }}
      data={data.contents}
    />
  );
}
