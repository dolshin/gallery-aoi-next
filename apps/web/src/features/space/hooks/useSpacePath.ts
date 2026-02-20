'use client';

import { useSpaceId } from '../providers/SpaceProvider';
import { getSpaceTopPath } from '../config/routes';

export const useSpaceTopPath = () => {
  const spaceId = useSpaceId();
  return getSpaceTopPath(spaceId);
};
