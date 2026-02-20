import { DEFAULT_SORT } from './constants';
import type { SortOption } from './types';

/**
 * SortOption を microCMS SDK 用の orders 文字列に変換する
 *
 * 例:
 *  - { key: 'publishedAt', direction: 'desc' } -> "-publishedAt"
 *  - { key: 'createdAt', direction: 'asc' }   -> "createdAt"
 */
export function buildOrders(order: SortOption = DEFAULT_SORT): string {
  return order.direction === 'asc' ? order.key : `-${order.key}`;
}
