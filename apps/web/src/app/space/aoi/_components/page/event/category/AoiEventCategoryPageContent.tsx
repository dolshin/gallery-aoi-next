import { EVENTS_PER_PAGE } from '../../../../event/constants';
import {
  fetchAllEventCategories,
  fetchPaginatedEventsByCategory,
} from '@/features/event/lib/microcms/functions';
import { notFound } from 'next/navigation';
import type { AoiEventCategoryPageContentProps } from './AoiEventCategoryPageContentProps';
import { AoiEventListTemplate } from '../../../template/event/list';

/**
 * イベントカテゴリ別イベント一覧ページコンテンツコンポーネント
 */
export async function AoiEventCategoryPageContent({
  slug,
  page,
}: AoiEventCategoryPageContentProps) {
  const currentPage = Number(page);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }
  const categories = await fetchAllEventCategories();
  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    notFound();
  }

  const offset = (currentPage - 1) * EVENTS_PER_PAGE;

  const data = await fetchPaginatedEventsByCategory({
    categoryId: category.id,
    limit: EVENTS_PER_PAGE,
    offset,
  });
  const totalPages = Math.ceil(data.totalCount / EVENTS_PER_PAGE);

  return (
    <AoiEventListTemplate
      pageContext={{ currentPage, totalPages, categoryName: category.name }}
      data={data.contents}
    />
  );
}
