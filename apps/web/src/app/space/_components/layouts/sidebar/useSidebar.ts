import { navigationMap } from '../../../_config/navigationMap';
import { spaceSectionPath } from '../../../_config/routes';
import type { SpaceId } from '../../../_config';
import { logoMap } from '../../../_config/logoMap';

export const useSidebar = (spaceId: SpaceId) => {
  const navItems = navigationMap[spaceId].map((item) => ({
    ...item,
    path: spaceSectionPath(spaceId, item.sectionId),
  }));

  const logo = logoMap[spaceId];

  return { logo, navItems };
};
