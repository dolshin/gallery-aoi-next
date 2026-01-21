'use client';
import { FormControl } from '../../FormControl';
import { Select } from '../../../inputs';
import type { SelectFieldProps } from './SelectFieldProps';

/**
 * セレクトフィールドコンポーネント
 */
export function SelectField<Value = string>({
  label,
  supportingText,
  error,
  errorText,
  required,
  disabled,
  touched,
  className,
  ...selectProps
}: SelectFieldProps<Value>) {
  return (
    <FormControl
      label={label}
      supportingText={supportingText}
      error={error}
      errorText={errorText}
      required={required}
      disabled={disabled}
      touched={touched}
      className={className}
    >
      <Select {...selectProps} />
    </FormControl>
  );
}
