'use client';
import { Field } from '@base-ui/react';
import { TextArea } from '../../../inputs';
import { FormControl } from '../../FormControl';
import type { TextAreaFieldProps } from './TextAreaFieldProps';

/**
 * テキストエリアフィールドコンポーネント
 */
export function TextAreaField({
  label,
  supportingText,
  error,
  errorText,
  required,
  disabled,
  touched,
  className,
  ...textAreaProps
}: TextAreaFieldProps) {
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
      <Field.Control
        render={(controlProps) => (
          <TextArea {...controlProps} {...textAreaProps} />
        )}
      />
    </FormControl>
  );
}
