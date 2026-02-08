import { PrivacyPolicy } from '@/features/privacy-policy/components/PrivacyPolicy';
import { SpaceRoutes } from '../../_config/routes';

/**
 * ギャラリーアオイのプライバシーポリシーページ
 */
export default function AoiPrivacyPolicyPage() {
  return <PrivacyPolicy href={SpaceRoutes.aoi} />;
}
