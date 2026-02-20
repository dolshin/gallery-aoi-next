import { NotFound } from '@/features/not-found';
import { SpaceRoutes } from '../_config/routes';

export default function AoiNotFoundPage() {
  return <NotFound href={SpaceRoutes.aoi} />;
}

