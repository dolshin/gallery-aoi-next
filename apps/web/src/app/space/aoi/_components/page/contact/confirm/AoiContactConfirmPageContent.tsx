import { Container } from '@dolshin/ui';
import { AoiContactConfirm } from '../../../contact/Confirm';
import { confirmCookieStore } from '@/features/contact/cookie';

/**
 * Gallery Aoi お問い合わせ確認フォームページコンテンツコンポーネント
 */
export async function AoiContactConfirmPageContent() {
  const raw = await confirmCookieStore.get();
  return (
    <Container style={{ textAlign: 'center', minHeight: '100vh' }}>
      <h2>入力内容の確認</h2>
      <p>下記の内容で問題がなければ送信するボタンを押してください。</p>

      <AoiContactConfirm cookieValue={raw} />
    </Container>
  );
}
