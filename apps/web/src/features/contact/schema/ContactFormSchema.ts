import * as z from 'zod';
import { SITE_VALUES } from '../../site/config/site';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'お名前は必須です。')
    .max(50, 'お名前は50文字以内で入力してください。'),
  phoneticName: z
    .string()
    .min(1, 'フリガナは必須です。')
    .max(50, 'フリガナは50文字以内で入力してください。'),
  subject: z.string().min(1, '件名を選択してください。'),
  emailAddress: z
    .string()
    .min(1, 'メールアドレスは必須です。')
    .email('有効なメールアドレスを入力してください。'),
  phoneNumber: z
    .string()
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください。')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(1, 'お問い合わせ内容は必須です。')
    .max(1000, 'お問い合わせ内容は1000文字以内で入力してください。'),
  'contact-origin': z.enum(SITE_VALUES),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
