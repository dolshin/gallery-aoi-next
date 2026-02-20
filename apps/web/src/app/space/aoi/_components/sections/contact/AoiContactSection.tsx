import { Container } from '@dolshin/ui';
import { AoiContactForm } from '../../contact/Contact/AoiContactForm';
import { PageSection } from '@/app/_components';
import { PrivacyPolicyLink } from '@/app/_components';
import type { ContactFormInput } from '@/features/contact/schema';
import { confirmCookieStore } from '@/features/contact/cookie';

export const AoiContactSection = async () => {
  const raw = await confirmCookieStore.get();
  const cookieValues = raw
    ? (JSON.parse(raw.value) as ContactFormInput)
    : undefined;

  return (
    <PageSection id="Contact" subTitle="Contact" title="お問い合わせ">
      <Container
        style={{
          //display: "flex",
          justifyContent: 'center',
          //alignItems: "center",
          gap: '0.8rem',
          margin: '20px 0 0',
        }}
      >
        <p style={{ width: '100%', letterSpacing: '0.08em', lineHeight: 2.5 }}>
          ご不明な点がございましたら、お気軽にお問い合わせください。
          <br />
          空き状況の確認、予約などもこちらから承っております。
        </p>
        <div style={{ maxWidth: '750px', margin: '70px 0 0' }}>
          <AoiContactForm cookieValues={cookieValues} />
        </div>
        <div style={{ maxWidth: '750px', margin: '44px 0 0' }}>
          <PrivacyPolicyLink spaceId="aoi" />
        </div>
      </Container>
    </PageSection>
  );
};
