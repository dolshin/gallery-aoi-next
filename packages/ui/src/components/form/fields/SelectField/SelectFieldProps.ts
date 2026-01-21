import type { FormControlPropsWithoutChildren } from '../../FormControl';
import type { SelectProps } from '../../../inputs';

export type SelectFieldProps<Value = string> = FormControlPropsWithoutChildren &
  SelectProps<Value>;
