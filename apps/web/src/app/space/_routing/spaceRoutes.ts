import type { SpaceId } from '../_config';

export const getSpaceTopPath = (spaceId: SpaceId) => {
  return `/space/${spaceId}`;
};
