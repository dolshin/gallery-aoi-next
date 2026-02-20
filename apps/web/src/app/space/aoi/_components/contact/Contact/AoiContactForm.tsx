'use client';

import { useActionState } from 'react';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Button, Stack, usePortalRootRef } from '@dolshin/ui';
import { SelectField, TextAreaField, TextField } from '@dolshin/forms/conform';
import { ContactFormSchema } from '@/features/contact/schema';
import { toContactConfirm } from '@/features/contact/actions/toContactConfirm';
import { SUBJECT_OPTIONS } from '../../../_config/contact-subject';
import type { AoiContactFormProps } from './AoiContactFormProps';
import { HoneypotField } from '@/features/contact/components';

/**
 * Gallery Aoi お問い合わせフォームコンポーネント
 */
export const AoiContactForm = ({ cookieValues }: AoiContactFormProps) => {
  const [lastResult, action] = useActionState(toContactConfirm, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: ContactFormSchema,
        disableAutoCoercion: true,
      });
    },
    defaultValue: cookieValues,
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const portalRootRef = usePortalRootRef();

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <dl style={{ maxWidth: '100%', margin: '0', lineHeight: 1.5 }}>
        <Stack spacing="lg">
          <input type="hidden" name="contact-origin" value="aoi" />
          <HoneypotField />
          <TextField
            field={fields.name}
            label="お名前"
            required
            placeholder="例) 山田太郎"
          />
          <TextField
            field={fields.phoneticName}
            label="フリガナ"
            required
            placeholder="例) ヤマダタロウ"
          />
          <SelectField
            field={fields.subject}
            label="件名"
            items={SUBJECT_OPTIONS}
            required
            modal
            placeholder="選択してください"
            container={portalRootRef || undefined}
          />
          <TextField
            field={fields.emailAddress}
            label="メールアドレス"
            type="email"
            required
            placeholder="例) example@example.com"
          />
          <TextField
            field={fields.phoneNumber}
            label="電話番号"
            type="tel"
            placeholder="例) 090-1234-5678"
          />
          <TextAreaField
            field={fields.message}
            label="お問い合わせ内容"
            required
            placeholder="例) お問い合わせ内容をこちらにご記入ください。"
            cols={40}
            rows={8}
          />
        </Stack>
        <div style={{ textAlign: 'center', margin: '60px 0 0' }}>
          <Button type="submit">入力内容を確認する</Button>
        </div>
      </dl>
    </form>
  );
};
