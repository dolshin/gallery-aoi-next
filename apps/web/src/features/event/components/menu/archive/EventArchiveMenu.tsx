import { Menu } from '@/components/Menu';
import type { EventArchiveMenuProps } from './EventArchiveMenuProps';

export const EventArchiveMenu = ({
  yearMonthes,
  spaceId,
}: EventArchiveMenuProps) => {
  const items = yearMonthes.map((yearMonth) => ({
    label: yearMonth,
    href: `/space/${spaceId}/event/archive/${yearMonth.replace('年', '/').replace('月', '')}`,
  }));
  return <Menu items={items} label="アーカイブ" />;
};
