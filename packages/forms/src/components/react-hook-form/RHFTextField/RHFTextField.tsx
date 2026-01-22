'use client';
import { Controller, type FieldValues } from 'react-hook-form';
import { TextField } from '@dolshin/ui';
import type { RHFTextFieldProps } from './RHFTextFieldProps';

/**
 * React Hook Form 依存 TextField
 */
export const RHFTextField = <FormData extends FieldValues>({
  name,
  control,
  ...props
}: RHFTextFieldProps<FormData>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
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
