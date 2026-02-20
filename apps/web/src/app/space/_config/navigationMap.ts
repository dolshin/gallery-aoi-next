import type { SpaceId } from '@/features/space/config';
import type { NavigationSeed } from './navigation';
import { AoiNavigationItems } from '../aoi/_config/navigation';

export const navigationMap: Record<SpaceId, readonly NavigationSeed[]> = {
  aoi: AoiNavigationItems,
  'touka-an': [],
  velza: [],
};
