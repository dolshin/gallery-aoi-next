import { AoiEventYearArchivePageContent } from '../../../_components';

/**
 * 年別イベントアーカイブ一覧ページコンポーネント
 */
export default async function AoiEventYearArchiveIndexPage({
  params,
}: PageProps<'/space/aoi/event/archive/[year]'>) {
  const { year } = await params;
  return <AoiEventYearArchivePageContent year={year} page={'1'} />;
}
