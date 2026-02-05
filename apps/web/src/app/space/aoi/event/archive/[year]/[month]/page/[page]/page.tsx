import { EVENTS_PER_PAGE } from '../../../../../constants';
import { fetchAllEventArchiveSeeds } from '@/features/event/lib/microcms/functions';
import { buildArchiveMaps } from '@/features/event/lib/microcms/utils';
import { AoiEventYearMonthArchivePageContent } from '../../../../../../_components/page/event/year-month-archive';

/**
 * 月別イベントアーカイブ一覧ページコンポーネント
 */
export default async function AoiEventYearMonthArchivePage({
  params,
}: PageProps<'/space/aoi/event/archive/[year]/[month]/page/[page]'>) {
  const { year, month, page } = await params;

  return (
    <AoiEventYearMonthArchivePageContent
      year={year}
      month={month}
      page={page}
    />
  );
}

/**
 * 静的パスを生成する関数
 */
export async function generateStaticParams() {
  const posts = await fetchAllEventArchiveSeeds();
  const { yearMonthMap } = buildArchiveMaps(posts);

  const params: { year: string; month: string; page: string }[] = [];

  for (const [key, items] of yearMonthMap) {
    const [year, month] = key.split('/');
    const totalPages = Math.ceil(items.length / EVENTS_PER_PAGE);

    for (let page = 2; page <= totalPages; page++) {
      params.push({ year, month, page: String(page) });
    }
  }
  return params;
}
