import { EVENTS_PER_PAGE } from '../../../../event/constants';
import { fetchPaginatedEvents } from '@/features/event/lib/microcms/functions';
import { notFound } from 'next/navigation';
import type { AoiEventYearMonthArchivePageContentProps } from './AoiEventYearMonthArchivePageContentProps';
import { AoiEventListTemplate } from '../../../template/event/list';

/**
 * 月別イベントアーカイブ一覧ページコンテンツコンポーネント
 */
export async function AoiEventYearMonthArchivePageContent({
  year,
  month,
  page,
}: AoiEventYearMonthArchivePageContentProps) {
  const currentPage = Number(page);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const offset = (currentPage - 1) * EVENTS_PER_PAGE;
  const startMonth = `${year}-${month}-01T00:00:00+09:00`;
  const endMonth = `${year}-${month}-31T23:59:59+09:00`;

  const data = await fetchPaginatedEvents({
    limit: EVENTS_PER_PAGE,
    offset: offset,
    orders: { key: 'startDate', direction: 'desc' },
    filters: `startDate[greater_than]${startMonth}[and]startDate[less_than]${endMonth}`,
  });

  if (data.contents.length === 0) notFound();

  const totalPages = Math.ceil(data.totalCount / EVENTS_PER_PAGE);

  return (
    <AoiEventListTemplate
      pageContext={{ currentPage, totalPages, year, month }}
      data={data.contents}
    />
  );
}
