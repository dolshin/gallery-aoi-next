import {
  fetchAllContents,
  fetchContentBySlug,
  fetchPaginated,
  fetchTotalCount,
} from '@/lib/microcms/fetchers';
import { buildEventArchiveYearMonths } from './utils';
import type { MicroCMSQueries } from '@/lib/microcms/types';
import { logger } from '@aoi/utils';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { MicroCMSEventContent, MicroCMSCategory } from './types';

/**
 * イベントの年月アーカイブ（"YYYY年MM月"）を取得する
 */
export async function fetchEventArchiveYearMonths(): Promise<string[]> {
  const events = await fetchAllEventContents();
  return buildEventArchiveYearMonths(events);
}

/**
 *　イベントコンテンツを全件取得する関数
 */
export async function fetchAllEventContents(): Promise<MicroCMSEventContent[]> {
  try {
    return await fetchAllContents({
      endpoint: 'event',
    });
  } catch (error) {
    logger.error('[fetchAllEventContents]', error);

    // UI / API 向けに意味のあるメッセージに変換
    throw new Error('イベント一覧の取得に失敗しました。');
  }
}

/**
 * イベントコンテンツをページネーション付きで取得する関数
 */
export async function fetchPaginatedEvents(
  queries: MicroCMSQueries,
): Promise<MicroCMSListResponse<MicroCMSEventContent>> {
  try {
    return await fetchPaginated({
      endpoint: 'event',
      ...queries,
    });
  } catch (error) {
    logger.error('[fetchPaginatedEvents]', error);
    throw new Error('イベント一覧の取得に失敗しました。');
  }
}

/**
 * イベントコンテンツの総件数を取得する関数
 */
export async function fetchEventTotalCount(): Promise<number> {
  try {
    return await fetchTotalCount({ endpoint: 'event' });
  } catch (error) {
    logger.error('[fetchEventTotalCount]', error);
    throw new Error('イベント件数の取得に失敗しました。');
  }
}

/**
 * slug からイベントを1件取得する
 */
export async function fetchEventBySlug(
  slug: string,
): Promise<MicroCMSEventContent | null> {
  try {
    return await fetchContentBySlug('event', slug);
  } catch (error) {
    logger.error('[fetchEventBySlug]', error);
    throw new Error('イベントの取得に失敗しました。');
  }
}
/**
 * イベントカテゴリ一覧を全件取得する関数
 */
export async function fetchAllEventCategories(): Promise<MicroCMSCategory[]> {
  try {
    return await fetchAllContents({
      endpoint: 'event-category',
      // queries: { filters: 'scope[contains]イベント情報' },
    });
  } catch (error) {
    logger.error('[fetchAllEventCategories]', error);
    throw new Error('イベントカテゴリ一覧の取得に失敗しました。');
  }
}
/**
 * 指定したカテゴリIDに紐づくイベントコンテンツの総件数を取得する関数
 */
export async function fetchEventCountByCategory(
  categoryId: string,
): Promise<number> {
  try {
    return await fetchTotalCount({
      endpoint: 'event',
      queries: {
        filters: `category[equals]${categoryId}`,
      },
    });
  } catch (error) {
    logger.error('[fetchEventCountByCategory]', error);
    throw new Error('イベント件数の取得に失敗しました。');
  }
}

/**
 * 指定したカテゴリIDに紐づくイベントコンテンツをページネーション付きで取得する関数
 */
export async function fetchPaginatedEventsByCategory(
  params: { categoryId: string } & MicroCMSQueries,
): Promise<MicroCMSListResponse<MicroCMSEventContent>> {
  try {
    return await fetchPaginated({
      endpoint: 'event',
      queries: {
        filters: `category[equals]${params.categoryId}`,
        limit: params.limit,
        offset: params.offset,
      },
    });
  } catch (error) {
    logger.error('[fetchPaginatedEventsByCategory]', error);
    throw new Error('イベント一覧の取得に失敗しました。');
  }
}

/**
 * イベントアーカイブ用のシードデータを全件取得する関数
 */
export async function fetchAllEventArchiveSeeds() {
  try {
    return await fetchAllContents({
      endpoint: 'event',
      queries: {
        fields: 'id,slug,startDate,endDate',
        orders: { key: 'startDate', direction: 'desc' },
      },
    });
  } catch (error) {
    logger.error('[fetchAllEventArchiveSeeds]', error);
    throw new Error('イベントアーカイブシードの取得に失敗しました。');
  }
}
