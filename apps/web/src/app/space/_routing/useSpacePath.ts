'use client';

import { useSpaceId } from '../_providers/SpaceProvider';
import { getSpaceTopPath } from './spaceRoutes';

export const useSpaceTopPath = () => {
  const spaceId = useSpaceId();
  return getSpaceTopPath(spaceId);
};
