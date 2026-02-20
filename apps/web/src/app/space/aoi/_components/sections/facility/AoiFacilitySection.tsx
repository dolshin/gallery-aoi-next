import { PageSection } from '@/features/layouts/components/section';
import { AoiFacilityInformation } from './information';
import { AoiEquipmentList } from './equipment';
import { AoiEquipmentSlider } from './slider';

export const AoiFacilitySection = () => (
  <PageSection id="Facility" title="施設情報" subTitle="Facility">
    <AoiFacilityInformation />
    <AoiEquipmentList />
    <AoiEquipmentSlider />
  </PageSection>
);
