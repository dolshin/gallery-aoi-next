import type { SectionId } from './sections';
import { SPACES, type SpaceId } from './spaces';

export const SpaceRoutes = {
  [SPACES.AOI]: '/space/aoi',
  [SPACES.TOUKA_AN]: '/space/touka-an',
  [SPACES.VELZA]: '/space/velza',
};

export function spaceSectionPath(spaceId: SpaceId, sectionId: SectionId) {
  return `/space/${spaceId}#${sectionId}`;
}
