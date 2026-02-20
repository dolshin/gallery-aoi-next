import type { LogoProps } from '@/app/_components';
import { SpaceRoutes } from '@/features/space/config/routes';
import { AoiAssets } from './asset';

export const AoiLogo: LogoProps = {
  src: AoiAssets.logo,
  alt: 'AOIロゴ',
  href: SpaceRoutes.aoi,
};
