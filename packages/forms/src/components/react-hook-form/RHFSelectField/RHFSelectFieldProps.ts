import type { SelectFieldProps } from '@dolshin/ui';
import type { OmitRHFManagedProps, RHFControlledFieldProps } from '../types';
import type { FieldValues } from 'react-hook-form';

/**
 * React Hook Form 依存 SelectField プロップスの型
 */
export type RHFSelectFieldProps<
  Value,
  FormData extends FieldValues,
> = OmitRHFManagedProps<SelectFieldProps<Value>> &
  RHFControlledFieldProps<FormData>;
