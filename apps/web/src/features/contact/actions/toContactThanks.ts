'use server';

import { redirect } from 'next/navigation';
import { ContactFormSchema, type ContactFormInput } from '../schema';
import { sendContactMail } from '../services/sendContactMail';
import { getContactThanksRoute } from '../routes/functions';
import { confirmCookieStore } from '../cookie';

/**
 * 第二ステップ：確認画面 → 送信 → 完了
 */
export async function toContactThanks() {
  const raw = await confirmCookieStore.get();

  if (!raw) {
    // 確認画面を直接開いた / Cookie 期限切れ
    return {
      status: 'error',
      message:
        '入力情報が見つかりませんでした。お手数ですが、入力画面からもう一度お進みください。',
    } as const;
  }

  let data: unknown;

  try {
    data = JSON.parse(raw.value) as ContactFormInput;
  } catch {
    return {
      status: 'error',
      message:
        '入力情報を正しく読み込めませんでした。戻るボタンから内容を確認し、再度お試しください。',
    } as const;
  }

  /**
   * 2. サーバー側で再度スキーマ検証
   *    （クライアント改ざん・Cookie 改ざん対策）
   */
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      status: 'validation-error',
      message:
        '入力内容に不備が見つかりました。戻るボタンから内容を確認し、修正してください。',
      errors: result.error.flatten(),
    } as const;
  }

  const validData = result.data;

  /**
   * 3. Mail 送信（外部 API）
   */
  try {
    await sendContactMail(validData);
  } catch (error) {
    console.error('Mail send failed:', error);

    return {
      status: 'send-error',
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    } as const;
  }

  /**
   * 4. Cookie 削除（二重送信防止）
   */
  await confirmCookieStore.clear();

  /**
   * 5. 完了画面へリダイレクト
   */
  const ContactOrigin = validData['contact-origin'];
  const ThanksRoute = getContactThanksRoute(ContactOrigin);
  redirect(ThanksRoute);
}
