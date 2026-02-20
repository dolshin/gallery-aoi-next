import { AoiEventCategoryPageContent } from '../../../_components/page';

/**
 * イベントカテゴリ別イベント一覧のページコンポーネント
 */
export default async function AoiEventCategoryIndexPage({
  params,
}: PageProps<'/space/aoi/event/category/[slug]'>) {
  const { slug } = await params;
  return <AoiEventCategoryPageContent slug={slug} page={'1'} />;
}
