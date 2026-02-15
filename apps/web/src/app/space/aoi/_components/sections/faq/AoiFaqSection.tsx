import { PageSection, FaqList } from '@/app/_components';
import { FAQs } from '../../../_config/faqs';

export const AoiFaqSection = () => (
  <PageSection id="Faq" title="よくある質問" subTitle="FAQ">
    <FaqList faqs={FAQs} />
  </PageSection>
);
