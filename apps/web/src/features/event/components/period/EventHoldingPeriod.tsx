import { formatDate } from '@/lib/date/functions';
import type { EventHoldingPeriodProps } from './EventHoldingPeriodProps';

export const EventHoldingPeriod = ({
  startDate,
  endDate,
}: EventHoldingPeriodProps) => {
  if (!startDate || !endDate) {
    return null;
  }
  const holdingPeriod =
    startDate === endDate ? (
      formatDate(startDate)
    ) : (
      <>
        {formatDate(startDate)} 〜 {formatDate(endDate)}
      </>
    );
  return <span>{holdingPeriod}</span>;
};
