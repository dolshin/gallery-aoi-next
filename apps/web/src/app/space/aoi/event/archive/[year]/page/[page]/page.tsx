import { EVENTS_PER_PAGE } from '../../../../constants';
import { fetchAllEventArchiveSeeds } from '@/features/event/lib/microcms/functions';
import { buildArchiveMaps } from '@/features/event/lib/microcms/utils';
import { AoiEventYearArchivePageContent } from '../../../../../_components';

/**
 * 月別イベントアーカイブ一覧ページコンポーネント
 */
export default async function AoiEventYearMonthArchivePage({
  params,
}: PageProps<'/space/aoi/event/archive/[year]/page/[page]'>) {
  const { year, page } = await params;

  return <AoiEventYearArchivePageContent year={year} page={page} />;
}

/**
 * 静的パスを生成する関数
 */
export async function generateStaticParams() {
  const posts = await fetchAllEventArchiveSeeds();
  const { yearMap } = buildArchiveMaps(posts);

  const params: { year: string; page: string }[] = [];

  for (const [year, items] of yearMap) {
    const totalPages = Math.ceil(items.length / EVENTS_PER_PAGE);

    for (let page = 2; page <= totalPages; page++) {
      params.push({ year, page: String(page) });
    }
  }

  return params;
}
