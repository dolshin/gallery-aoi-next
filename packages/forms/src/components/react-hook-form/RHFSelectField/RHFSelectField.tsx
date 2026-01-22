'use client';
import { Controller, type FieldValues } from 'react-hook-form';
import { SelectField } from '@dolshin/ui';
import type { RHFSelectFieldProps } from './RHFSelectFieldProps';

/**
 * React Hook Form 依存 SelectField
 */
export const RHFSelectField = <Value, FormData extends FieldValues>({
  name,
  control,
  ...props
}: RHFSelectFieldProps<Value, FormData>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <SelectField<Value>
          {...field}
          {...props}
          onValueChange={field.onChange}
          error={!!error}
          errorText={error?.message}
          aria-invalid={!!error}
        />
      )}
    />
  );
};
