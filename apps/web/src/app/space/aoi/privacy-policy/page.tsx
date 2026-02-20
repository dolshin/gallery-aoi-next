import { PrivacyPolicy } from '@/app/_components';
import { SpaceRoutes } from '@/features/space/config/routes';

/**
 * ギャラリーアオイのプライバシーポリシーページ
 */
export default function AoiPrivacyPolicyPage() {
  return <PrivacyPolicy href={SpaceRoutes.aoi} />;
}
