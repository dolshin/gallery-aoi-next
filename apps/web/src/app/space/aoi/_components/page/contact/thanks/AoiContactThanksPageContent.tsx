import { ContactThanks } from '@/features/contact/components';
import { SpaceRoutes } from '@/features/space/config/routes';

/**
 * Gallery Aoi お問い合わせサンクスページコンテンツコンポーネント
 */
export async function AoiContactThanksPageContent() {
  return <ContactThanks href={SpaceRoutes['aoi']} />;
}
