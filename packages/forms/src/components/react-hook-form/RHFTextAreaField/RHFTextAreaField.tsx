'use client';
import { Controller, type FieldValues } from 'react-hook-form';
import { TextAreaField } from '@dolshin/ui';
import type { RHFTextAreaFieldProps } from './RHFTextAreaFieldProps';

/**
 * React Hook Form 依存 TextAreaField
 */
export const RHFTextAreaField = <FormData extends FieldValues>({
  name,
  control,
  ...props
}: RHFTextAreaFieldProps<FormData>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextAreaField
          {...field}
          {...props}
          error={!!error}
          errorText={error?.message}
          aria-invalid={!!error}
        />
      )}
    />
  );
};
