import { PageSection } from '@/app/_components';
import { AoiPriceTable } from './AoiPriceTable';

export const AoiPriceSection = () => {
  return (
    <PageSection id="Price" title="料金" subTitle="Price">
      <AoiPriceTable />
    </PageSection>
  );
};
