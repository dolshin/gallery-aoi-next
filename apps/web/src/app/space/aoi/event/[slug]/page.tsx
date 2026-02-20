import { fetchEventBySlug } from '@/features/event/lib/microcms/functions';
import { EventDetail } from '@/features/event/components';
import { notFound } from 'next/navigation';

/**
 * イベント詳細のページコンポーネント
 */
export default async function AoiEventDetailPage({
  params,
}: PageProps<'/space/aoi/event/[slug]'>) {
  const { slug } = await params;
  const data = await fetchEventBySlug(slug);
  if (!data) {
    notFound();
  }
  return <EventDetail event={data} />;
}
