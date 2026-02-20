import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { microCMSClient } from './client';
import type {
  AllContentsQueryParams,
  EndpointMap,
  MicroCMSQueries,
} from './types';
import { buildOrders } from './utils';

/**
 * microCMS コンテンツを全て取得する関数
 */
export async function fetchAllContents<E extends keyof EndpointMap>({
  endpoint,
  queries,
}: {
  endpoint: E;
  queries?: AllContentsQueryParams;
}): Promise<EndpointMap[E][]> {
  return microCMSClient.getAllContents<EndpointMap[E]>({
    endpoint,
    queries: { ...queries, orders: buildOrders(queries?.orders) },
  });
}

/**
 * microCMS のコンテンツをページネーション付きで取得する関数
 */
export async function fetchPaginated<E extends keyof EndpointMap>({
  endpoint,
  queries,
}: {
  endpoint: E;
  queries?: MicroCMSQueries;
}): Promise<MicroCMSListResponse<EndpointMap[E]>> {
  return microCMSClient.getList<EndpointMap[E]>({
    endpoint,
    queries: {
      ...queries,
      orders: buildOrders(queries?.orders),
    },
  });
}

/**
 * slug から microCMS コンテンツを1件取得する関数
 */
export async function fetchContentBySlug<E extends keyof EndpointMap>(
  endpoint: E,
  slug: string,
): Promise<EndpointMap[E] | null> {
  const res = await microCMSClient.getList<EndpointMap[E]>({
    endpoint,
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  return res.contents[0] ?? null;
}

/**
 * microCMS コンテンツの総件数を取得する関数
 */
export async function fetchTotalCount<E extends keyof EndpointMap>({
  endpoint,
  queries,
}: {
  endpoint: E;
  queries?: MicroCMSQueries;
}): Promise<number> {
  const res = await microCMSClient.getList({
    endpoint,
    queries: { ...queries, orders: buildOrders(queries?.orders), limit: 0 },
  });

  return res.totalCount;
}
