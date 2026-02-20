import { NotFound } from '@/app/_components';
import { SpaceRoutes } from '@/features/space/config/routes';

export default function AoiNotFoundPage() {
  return <NotFound href={SpaceRoutes.aoi} />;
}
