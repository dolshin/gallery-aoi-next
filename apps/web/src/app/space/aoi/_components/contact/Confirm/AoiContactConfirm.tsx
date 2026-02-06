'use client';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Stack } from '@dolshin/ui';
import { ContactConfirmItem } from '@/features/contact/components';
import { toContactThanks } from '@/features/contact/actions/toContactThanks';
import { SpaceRoutes, spaceSectionPath } from '../../../../_config/routes';
import type { AoiContactConfirmProps } from './AoiContactConfirmProps';
import { LinkButton } from '@/components/Button';
import type { ContactFormInput } from '@/features/contact/schema';
import { AOI_CONTACT_FORM_FIELD } from '../../../_config/contact-form-field';
import { Message } from '@/components/Message';
import * as styles from './AoiContactConfirm.css';

export function AoiContactConfirm({ cookieValue }: AoiContactConfirmProps) {
  const router = useRouter();
  const [state, action, pending] = useActionState(toContactThanks, null);

  if (!cookieValue) {
    return (
      <>
        <p>セッションが切れました。</p>
        <LinkButton href={spaceSectionPath('aoi', 'Contact')}>
          入力画面に戻る
        </LinkButton>
      </>
    );
  }

  let contactValue: ContactFormInput;

  try {
    contactValue = JSON.parse(cookieValue.value) as ContactFormInput;
  } catch {
    return (
      <>
        <p>入力情報を読み込めませんでした。</p>
        <LinkButton href={spaceSectionPath('aoi', 'Contact')}>
          入力画面に戻る
        </LinkButton>
      </>
    );
  }
  return (
    <form action={action}>
      {AOI_CONTACT_FORM_FIELD.map((item, index) => (
        <ContactConfirmItem
          key={index}
          label={item.label}
          value={contactValue[item.field] ?? ''}
        />
      ))}

      <Stack
        direction="horizontal"
        justify="between"
        wrap="yes"
        style={{
          maxWidth: '600px',
          margin: '40px auto',
        }}
      >
        <Button
          onClick={() => {
            router.push(`${SpaceRoutes.aoi}/#Contact`);
          }}
          type="button"
        >
          戻る
        </Button>
        <Button type="submit" loading={pending} loadingPosition="left">
          送信する
        </Button>
      </Stack>
      {state?.message && (
        <Message variant="error" className={styles.message}>
          {state.message}
        </Message>
      )}
    </form>
  );
}
