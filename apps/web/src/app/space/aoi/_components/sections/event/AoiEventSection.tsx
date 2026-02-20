import { PageSection } from '@/app/_components';
import { EventList } from '@/features/event/components/list/EventList';
import { LinkButton } from '@/components/Button';
import { fetchPaginatedEvents } from '@/features/event/lib/microcms/functions';

export const AoiEventSection = async () => {
  const events = await fetchPaginatedEvents({ limit: 5, offset: 0 });
  return (
    <PageSection id="Event" subTitle="Event" title="イベント情報">
      <EventList events={events.contents} />
      <div style={{ textAlign: 'center', margin: '60px 0 0' }}>
        <LinkButton href="/space/aoi/event/" arrow="right">
          一覧を見る
        </LinkButton>
      </div>
    </PageSection>
  );
};
