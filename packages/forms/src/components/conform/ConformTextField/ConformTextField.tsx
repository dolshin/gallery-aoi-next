'use client';
import { TextField } from '@dolshin/ui';
import type { ConformTextFieldProps } from './ConformTextFieldProps';

/**
 * Conform 依存 TextField
 */
export const ConformTextField = ({
  field,
  ...props
}: ConformTextFieldProps) => {
  const hasError = !!field.errors?.length;
  return (
    <TextField
      name={field.name}
      defaultValue={field.initialValue}
      {...props}
      error={hasError}
      errorText={field.errors?.[0]}
      aria-invalid={hasError}
    />
  );
};
