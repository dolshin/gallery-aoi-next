import type { SpaceId } from './spaces';
import { AoiLogo } from '../aoi/_config/logo';
import type { LogoProps } from '@/features/logo/Logo';

export const logoMap: Record<SpaceId, LogoProps> = {
  aoi: AoiLogo,
  'touka-an': AoiLogo,
  velza: AoiLogo,
};
