import { EventListItem } from './item/EventListItem';
import type { EventListProps } from './EventListProps';

/**
 * イベント一覧コンポーネント
 */
export const EventList = ({ events }: EventListProps) => {
  return (
    <ul>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </ul>
  );
};
