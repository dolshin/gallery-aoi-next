import { redirect } from 'next/navigation';
import { SpaceRoutes } from '@/features/space/_config/routes';

export default function Home() {
  redirect(SpaceRoutes.aoi);
}
