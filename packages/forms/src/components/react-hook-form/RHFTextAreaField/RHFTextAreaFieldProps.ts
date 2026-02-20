import type { TextAreaFieldProps } from '@dolshin/ui';
import type { OmitRHFManagedProps, RHFControlledFieldProps } from '../types';
import type { FieldValues } from 'react-hook-form';

/**
 * React Hook Form 依存 TextAreaField プロップスの型
 */
export type RHFTextAreaFieldProps<FormData extends FieldValues> =
  OmitRHFManagedProps<TextAreaFieldProps> & RHFControlledFieldProps<FormData>;
