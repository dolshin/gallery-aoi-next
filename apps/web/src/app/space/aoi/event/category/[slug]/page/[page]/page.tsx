import { EVENTS_PER_PAGE } from '../../../../constants';
import {
  fetchAllEventCategories,
  fetchEventCountByCategory,
} from '@/features/event/lib/microcms/functions';
import { AoiEventCategoryPageContent } from '../../../../../_components/page';

/**
 * イベントカテゴリ別イベント一覧のページコンポーネント
 */
export default async function AoiEventCategoryPage({
  params,
}: PageProps<'/space/aoi/event/category/[slug]/page/[page]'>) {
  const { slug, page } = await params;
  return <AoiEventCategoryPageContent slug={slug} page={page} />;
}

export async function generateStaticParams() {
  const categories = await fetchAllEventCategories();

  const params: { slug: string; page: string }[] = [];

  for (const category of categories) {
    const totalCount = await fetchEventCountByCategory(category.id);
    const totalPages = Math.ceil(totalCount / EVENTS_PER_PAGE);

    // category/[slug]/page/1 は生成しない（/category/[slug] が担当）
    for (let page = 2; page <= totalPages; page++) {
      params.push({
        slug: category.slug,
        page: String(page),
      });
    }
  }
  return params;
}
