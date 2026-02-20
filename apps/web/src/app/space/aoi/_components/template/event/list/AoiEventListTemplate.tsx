import { PageLayout } from '@/app/_components';
import { EventCategoryMenu } from '@/features/event/components/menu/category/EventCategoryMenu';
import { EventArchiveMenu } from '@/features/event/components/menu/archive/EventArchiveMenu';
import { LinkButton } from '@/components/Button';
import type { AoiEventListTemplateProps } from './AoiEventListTemplateProps';
import { PaginatedEventList } from '@/features/event/components';
import { getEventTitle } from '@/features/event/lib/getEventTitle';
import {
  fetchAllEventCategories,
  fetchEventArchiveYearMonths,
} from '@/features/event/lib/microcms/functions';
import { SpaceRoutes } from '@/features/space/config/routes';

/**
 * ギャラリー AOI イベント一覧のページネーション付きテンプレートコンポーネント
 */
export const AoiEventListTemplate = async ({
  data,
  pageContext,
}: AoiEventListTemplateProps) => {
  const { categoryName, year, month } = pageContext;
  const eventTitle = getEventTitle(categoryName, year, month);
  const categories = await fetchAllEventCategories();
  const yearMonthes = await fetchEventArchiveYearMonths();
  return (
    <PageLayout title="イベント一覧" subTitle="">
      <h3
        style={{
          fontWeight: 'normal',
          letterSpacing: '0.05em',
        }}
      >
        {eventTitle}
      </h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '40px',
          padding: '20px 0 0',
        }}
      >
        <EventCategoryMenu categories={categories} spaceId="aoi" />
        <EventArchiveMenu yearMonthes={yearMonthes} spaceId="aoi" />
      </div>
      <PaginatedEventList data={data} pageContext={pageContext} />
      <div style={{ textAlign: 'center', margin: '60px 0 0' }}>
        <LinkButton arrow="left" href={SpaceRoutes.aoi}>
          トップページに戻る
        </LinkButton>
      </div>
    </PageLayout>
  );
};
