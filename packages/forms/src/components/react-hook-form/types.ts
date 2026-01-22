import type { FieldValues, Path, Control } from 'react-hook-form';

/**
 * React Hook Form によって制御されるため、UI側プロップスから除外すべきプロパティ
 */
type RHFManagedProps =
  | 'name'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur';

/**
 * UIコンポーネント側の props から RHFManagedProps を除外する型
 */
export type OmitRHFManagedProps<T> = Omit<T, RHFManagedProps>;

export type RHFControlledFieldProps<FormData extends FieldValues> = {
  /** フォームデータ送信用・RHF登録のための必須属性 */
  name: Path<FormData>;
  /** React Hook Form のコントロールオブジェクト */
  control: Control<FormData>;
};

/**
 * React Hook Form と組み合わせて使用するためのコンポーネントプロップスの型
 * UIコンポーネントのプロップスから RHFManagedProps を除外し、RHF のコントロール用プロップスを追加
 */
export type RHFComponentProps<
  T,
  FormData extends FieldValues,
> = OmitRHFManagedProps<T> & RHFControlledFieldProps<FormData>;
