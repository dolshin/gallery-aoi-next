import type { MicroCMSEventContent } from './types';

/**
 * イベント一覧から "YYYY年MM月" のアーカイブ配列を作成する
 */
export function buildEventArchiveYearMonths(
  events: MicroCMSEventContent[],
): string[] {
  const set = new Set<string>();

  for (const event of events) {
    if (!event.startDate) continue;

    const date = new Date(event.startDate);

    // Date パース失敗 (Invalid Date) を除外
    if (Number.isNaN(date.getTime())) continue;

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    set.add(`${year}年${month}月`);
  }

  // 表示を安定させるため、降順でソートして配列で返す
  return Array.from(set).sort((a, b) => (a < b ? 1 : -1));
}

export function buildArchiveMaps(posts: { startDate?: string }[]) {
  const yearMonthMap = new Map<string, typeof posts>();
  const yearMap = new Map<string, typeof posts>();

  for (const post of posts) {
    if (!post.startDate) continue;

    const date = new Date(post.startDate);
    if (Number.isNaN(date.getTime())) continue;

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');

    const ymKey = `${year}/${month}`;

    yearMonthMap.set(ymKey, [...(yearMonthMap.get(ymKey) ?? []), post]);
    yearMap.set(year, [...(yearMap.get(year) ?? []), post]);
  }

  return { yearMonthMap, yearMap };
}
