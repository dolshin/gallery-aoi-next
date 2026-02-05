import type { ContactFormInput } from '@/features/contact/schema';
import type { ContactFormField } from '@/features/contact/type';

export const AOI_CONTACT_FORM_FIELD = [
  {
    label: 'お名前',
    field: 'name',
  },
  {
    label: 'フリガナ',
    field: 'phoneticName',
  },
  {
    label: 'メールアドレス',
    field: 'emailAddress',
  },
  {
    label: '電話番号',
    field: 'phoneNumber',
  },
  {
    label: '件名',
    field: 'subject',
  },
  {
    label: 'お問い合わせ内容',
    field: 'message',
  },
] as const satisfies readonly ContactFormField<keyof ContactFormInput>[];
