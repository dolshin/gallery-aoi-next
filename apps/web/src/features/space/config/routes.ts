import type { SectionId } from '@/app/space/_config/sections';
import { SPACES, type SpaceId } from './spaces';

export const SpaceRoutes = {
  [SPACES.AOI]: '/space/aoi',
  [SPACES.TOUKA_AN]: '/space/touka-an',
  [SPACES.VELZA]: '/space/velza',
};

export const getSpaceTopPath = (spaceId: SpaceId) => {
  return `/space/${spaceId}`;
};

export function spaceSectionPath(spaceId: SpaceId, sectionId: SectionId) {
  return `/space/${spaceId}#${sectionId}`;
}
