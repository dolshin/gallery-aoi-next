'use server';

import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { ContactFormSchema } from '../schema';
import { confirmCookieStore } from '../cookie';
import { getContactConfirmRoute } from '../routes/functions';

export async function toContactConfirm(
  _prevState: unknown,
  formData: FormData,
) {
  // Honeypot チェック
  const honeypot = formData.get('website');

  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    // ボットと判断
    console.warn('[honeypot] bot detected');

    // 何事もなかったかのように返す
    return {
      status: 'success',
    } as const;
  }

  const submission = parseWithZod(formData, {
    schema: ContactFormSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await confirmCookieStore.set(submission.value);

  const ContactOrigin = submission.value['contact-origin'];
  const ConfirmRoute = getContactConfirmRoute(ContactOrigin);
  redirect(ConfirmRoute);
}
