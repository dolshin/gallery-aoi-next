import { fetchEventTotalCount } from '@/features/event/lib/microcms/functions';
import { EVENTS_PER_PAGE } from '../../constants';
import { AoiEventListPageContent } from '../../../_components/page/event/list';

/**
 * イベント一覧のページネーション付きページコンポーネント
 */
export default async function AoiEventListPage({
  params,
}: PageProps<'/space/aoi/event/page/[page]'>) {
  const { page } = await params;
  <AoiEventListPageContent page={page} />;
}

/**
 * ビルド時に静的生成するイベントページ一覧を定義
 */
export async function generateStaticParams() {
  const totalCount = await fetchEventTotalCount();
  const totalPages = Math.ceil(totalCount / EVENTS_PER_PAGE);
  // /event/page/1 は生成しない
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}
