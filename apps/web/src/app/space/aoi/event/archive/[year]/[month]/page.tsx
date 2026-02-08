import { AoiEventYearMonthArchivePageContent } from '../../../../_components/page/event/year-month-archive';

/**
 * 月別イベントアーカイブ一覧ページコンポーネント
 */
export default async function AoiEventYearMonthArchiveIndexPage({
  params,
}: PageProps<'/space/aoi/event/archive/[year]/[month]'>) {
  const { year, month } = await params;
  return (
    <AoiEventYearMonthArchivePageContent year={year} month={month} page={'1'} />
  );
}
