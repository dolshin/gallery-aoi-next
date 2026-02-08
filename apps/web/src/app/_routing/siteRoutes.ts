import type { Site } from '../_config/site';
import { getSpaceTopPath } from '../space/_routing/spaceRoutes';

export const getSiteTopPath = (site: Site) => {
  switch (site) {
    case 'top':
      return '/';
    case 'aoi':
      return getSpaceTopPath('aoi');
    case 'touka-an':
      return getSpaceTopPath('touka-an');
    case 'velza':
      return getSpaceTopPath('velza');
    default:
      break;
  }
};
