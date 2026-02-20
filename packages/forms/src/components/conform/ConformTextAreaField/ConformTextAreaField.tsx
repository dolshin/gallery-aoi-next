'use client';
import { TextAreaField } from '@dolshin/ui';
import type { ConformTextAreaFieldProps } from './ConformTextAreaFieldProps';

/**
 * Conform 依存 TextAreaField
 */
export const ConformTextAreaField = ({
  field,
  ...props
}: ConformTextAreaFieldProps) => {
  const hasError = !!field.errors?.length;
  return (
    <TextAreaField
      name={field.name}
      defaultValue={field.initialValue}
      {...props}
      error={hasError}
      errorText={field.errors?.[0]}
      aria-invalid={hasError}
    />
  );
};
