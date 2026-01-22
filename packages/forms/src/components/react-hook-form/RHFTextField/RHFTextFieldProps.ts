import type { TextFieldProps } from '@dolshin/ui';
import type { OmitRHFManagedProps, RHFControlledFieldProps } from '../types';
import type { FieldValues } from 'react-hook-form';

/**
 * React Hook Form 依存 TextField プロップスの型
 */
export type RHFTextFieldProps<FormData extends FieldValues> =
  OmitRHFManagedProps<TextFieldProps> & RHFControlledFieldProps<FormData>;
