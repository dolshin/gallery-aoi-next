import { NotFound } from '@/app/_components';
import { SpaceRoutes } from '../_config/routes';

export default function AoiNotFoundPage() {
  return <NotFound href={SpaceRoutes.aoi} />;
}
