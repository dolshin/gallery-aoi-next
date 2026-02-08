import {
  AoiMainVisualSection,
  AoiFacilitySection,
  AoiPriceSection,
  AoiFaqSection,
  AoiEventSection,
  AoiAccessSection,
  AoiContactSection,
} from '../../sections';

export const AoiHomeContents = () => {
  return (
    <>
      <AoiMainVisualSection />
      <AoiFacilitySection />
      <AoiPriceSection />
      <AoiFaqSection />
      <AoiEventSection />
      <AoiAccessSection />
      <AoiContactSection />
    </>
  );
};
