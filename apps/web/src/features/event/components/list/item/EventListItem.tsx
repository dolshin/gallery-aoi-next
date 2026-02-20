'use client';
import Link from 'next/link';
import { EventHoldingPeriod } from '../../period/EventHoldingPeriod';
import { MicroCMSImage } from '@/components/Image/microCMS/MicroCMSImage';
import type { EventListItemProps } from './EventListItemProps';
import * as styles from './EventListItem.css';
import { useSpaceTopPath } from '@/features/space/hooks/useSpacePath';

export const EventListItem = ({ event }: EventListItemProps) => {
  const spaceTopPath = useSpaceTopPath();
  return (
    <li className={styles.listItem}>
      <Link
        className={styles.link}
        href={`${spaceTopPath}/event/${event.slug}`}
      >
        <div
          style={{
            display: 'flex',
            columnGap: '32px',
            flexWrap: 'wrap',
            padding: '1.4em 0 1.4em 1.2em',
          }}
        >
          <figure
            style={{
              margin: '0 1em 0.8em 0.1em',
              //margin: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              maxWidth: '320px',
              maxHeight: '200px',
            }}
          >
            <MicroCMSImage
              src={event.image?.url}
              alt={event.title ?? ''}
            />{' '}
          </figure>
          <div>
            <time className={styles.date}>
              <EventHoldingPeriod
                startDate={event.startDate}
                endDate={event.endDate}
              />
            </time>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.organizer}>{event.organizer}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
