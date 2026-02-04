import { PageSection } from '@/features/layouts/components/section';
import { AoiPriceTable } from './AoiPriceTable';

export const AoiPriceSection = () => {
  return (
    <PageSection id="Price" title="料金" subTitle="Price">
      <AoiPriceTable />
    </PageSection>
  );
};
