import { navigationMap } from '../../../_config/navigationMap';
import { spaceSectionPath } from '@/features/space/config/routes';
import type { SpaceId } from '@/features/space/config';
import { logoMap } from '../../../_config/logoMap';

export const useSidebar = (spaceId: SpaceId) => {
  const navItems = navigationMap[spaceId].map((item) => ({
    ...item,
    path: spaceSectionPath(spaceId, item.sectionId),
  }));

  const logo = logoMap[spaceId];

  return { logo, navItems };
};
