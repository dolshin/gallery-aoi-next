import { LinkButton } from '@/components/Button';
import type { ContactThanksProps } from './ContactThanksProps';

export const ContactThanks = ({ href }: ContactThanksProps) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px', height: '80vh' }}>
      <h2>お問い合わせが完了しました</h2>
      <p style={{ marginTop: '40px', fontSize: '18px' }}>
        お問い合わせいただき、ありがとうございます。
        <br />
        担当者より折り返しご連絡いたしますので、しばらくお待ちください。
      </p>
      <LinkButton href={href}>ホームに戻る</LinkButton>
    </div>
  );
};
