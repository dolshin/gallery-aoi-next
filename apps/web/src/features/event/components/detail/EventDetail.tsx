import { MicroCMSImage } from '@/components/Image/microCMS/MicroCMSImage';
import { EventHoldingPeriod } from '../period';
import type { EventDetailProps } from './EventDetailProps';
import { LinkButton } from '@/components/Button';
import { Chip } from '@dolshin/ui';
import { PageLayout } from '@/features/layouts/components/page/PageLayout';

export const EventDetail = ({ event }: EventDetailProps) => {
  return (
    <PageLayout title="イベント情報" subTitle="">
      <div
        style={{
          marginTop: '30px',
          marginBottom: '40px',
          borderBottom: '1px solid rgb(221, 221, 221)',
        }}
      >
        <Chip>{event?.category?.name}</Chip>
        <p
          style={{
            textAlign: 'left',
            fontSize: '22px',
            margin: '.6em 0 .8em',
          }}
        >
          {event?.title}
        </p>
        <p
          style={{
            margin: '2px 0 0 0',
            fontSize: '15px',
            color: '#7b7b7b',
          }}
        >
          主催者：{event?.organizer}
        </p>
        <p
          style={{
            margin: '2px 0 0 0',
            fontSize: '15px',
            color: '#7b7b7b',
          }}
        >
          開催時期：
          <EventHoldingPeriod
            startDate={event?.startDate}
            endDate={event?.endDate}
          />
        </p>
      </div>
      <figure
        style={{
          margin: '0 1em 0.8em 0',
          overflow: 'hidden',

          maxWidth: '800px',
        }}
      >
        <MicroCMSImage
          src={event?.image?.url}
          alt={event?.title ?? ''}
          width={event?.image?.width || 280}
          height={event?.image?.height || 200}
        />
      </figure>

      <div
        dangerouslySetInnerHTML={{ __html: event?.body ?? '' }}
        style={{
          fontSize: '17px',
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <LinkButton href="/space/aoi/event">一覧へ戻る</LinkButton>
      </div>
    </PageLayout>
  );
};
