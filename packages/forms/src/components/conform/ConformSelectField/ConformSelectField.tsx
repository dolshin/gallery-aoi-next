'use client';
import { SelectField } from '@dolshin/ui';
import type { ConformSelectFieldProps } from './ConformSelectFieldProps';
import { useControl } from '@conform-to/react/future';
import { useRef } from 'react';

/**
 * Conform 依存 SelectField
 */
export function ConformSelectField({
  field,
  ...props
}: ConformSelectFieldProps) {
  const ref = useRef<HTMLInputElement>(null);
  const control = useControl({
    defaultValue: field.initialValue,
    onFocus() {
      ref.current?.focus();
    },
  });
  const hasError = !!field.errors?.length;
  return (
    <>
      <input ref={control.register} name={field.name} hidden />
      <SelectField
        value={control.value ?? ''}
        onValueChange={(value) => control.change(value)}
        onOpenChange={(open) => {
          if (!open) {
            control.blur();
          }
        }}
        inputRef={ref}
        error={hasError}
        errorText={field.errors?.[0]}
        aria-invalid={hasError}
        {...props}
      />
    </>
  );
}
