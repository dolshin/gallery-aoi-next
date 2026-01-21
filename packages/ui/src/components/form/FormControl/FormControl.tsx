'use client';
import { Field } from '@base-ui/react/field';
import clsx from 'clsx';
import type { FormControlProps } from './FormControlProps';
import * as styles from './FormControl.css';

/**
 * フォームコントロールコンポーネント
 */
export const FormControl = ({
  label,
  supportingText,
  errorText,
  error,
  required,
  disabled,
  touched,
  children,
  className,
}: FormControlProps) => {
  return (
    <Field.Root
      touched={touched}
      disabled={disabled}
      invalid={error}
      className={clsx(styles.root, className)}
    >
      {label && (
        <Field.Label className={styles.label}>
          {label}
          {required && (
            <span aria-hidden="true" className={styles.requiredMark}>
              *
            </span>
          )}
        </Field.Label>
      )}
      {children}
      {supportingText && (
        <Field.Description className={styles.supportingText}>
          {supportingText}
        </Field.Description>
      )}
      {error && errorText && (
        <Field.Error match={error} className={styles.errorText}>
          {errorText}
        </Field.Error>
      )}
    </Field.Root>
  );
};
