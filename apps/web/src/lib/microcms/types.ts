import type { MicroCMSCategory, MicroCMSEventContent } from '@/features/event';
import type { MicroCMSDate } from 'microcms-js-sdk';

/**
 * Sort Order Key
 */
type SortOrderKey = keyof MicroCMSDate | 'startDate' | 'endDate';

/**
 * ソート方向
 * asc: 昇順
 * desc: 降順
 */
type SortDirection = 'asc' | 'desc';

/**
 * ソート指定オプション
 * SDK の `orders: "-publishedAt"` という仕様を隠蔽するための抽象型
 */
export type SortOption = {
  /** ソート対象のフィールド */
  key: SortOrderKey;
  /** ソート方向（省略時は desc 扱い） */
  direction?: SortDirection;
};

type depthNumber = 0 | 1 | 2 | 3;

export type MicroCMSQueries = {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: SortOption;
  fields?: string | string[];
  q?: string;
  depth?: depthNumber;
  ids?: string | string[];
  filters?: string;
  richEditorFormat?: 'html' | 'object';
};

/**
 * 全件取得（Get All Contents API）用のクエリパラメータ
 */
export type AllContentsQueryParams = Omit<
  MicroCMSQueries,
  'limit' | 'offset' | 'ids'
>;

/** microCMS エンドポイントとレスポンスデータの型マップ */
export type EndpointMap = {
  /** イベントコンテンツ */
  event: MicroCMSEventContent;
  /** イベントカテゴリ */
  'event-category': MicroCMSCategory;
};
