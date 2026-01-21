'use client';
import { FormControl } from '../../FormControl';
import { Input } from '../../../inputs';
import type { TextFieldProps } from './TextFieldProps';

export function TextField({
  label,
  supportingText,
  error,
  errorText,
  required,
  disabled,
  touched,
  className,
  ...inputProps
}: TextFieldProps) {
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
      <Input {...inputProps} />
    </FormControl>
  );
}
