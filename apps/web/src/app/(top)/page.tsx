import { redirect } from 'next/navigation';
import { SpaceRoutes } from '@/features/space/config/routes';

export default function Home() {
  redirect(SpaceRoutes.aoi);
}
