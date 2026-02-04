import { Menu } from '@/components/Menu';
import type { EventCategoryMenuProps } from './EventCategoryMenuProps';

export const EventCategoryMenu = ({
  categories,
  spaceId,
}: EventCategoryMenuProps) => {
  const menuItems = categories.map((category) => ({
    label: category.name ?? '',
    href: `/space/${spaceId}/event/category/${category.slug}`,
  }));
  return <Menu items={menuItems} label="カテゴリ" />;
};
