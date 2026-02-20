import { FaqList } from '@/features/faq/list';
import { PageSection } from '@/features/layouts/components/section';
import { FAQs } from '../../../_config/faqs';

export const AoiFaqSection = () => (
  <PageSection id="Faq" title="よくある質問" subTitle="FAQ">
    <FaqList faqs={FAQs} />
  </PageSection>
);
