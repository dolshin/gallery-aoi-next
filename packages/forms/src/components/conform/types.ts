import type { FieldMetadata } from '@conform-to/react';

/**
 * Conform 対応コンポーネントで「UI側から渡させない」props（予約語）
 * - Conform が field から注入する前提のため
 */
export type ConformReservedProps =
  | 'name'
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'onBlur';

/**
 * UIコンポーネント側の props から ConformReservedProps を除外する型
 */
export type OmitConformReservedProps<T> = Omit<T, ConformReservedProps>;

/**
 * Conform 対応コンポーネントが必ず受け取る props
 * - name / defaultValue 等はすべて field から導出する
 */
export type ConformFieldProps<TValue> = {
  field: FieldMetadata<TValue>;
};

/**
 * Conform と組み合わせて使用するためのコンポーネントプロップスの型
 * UIコンポーネントのプロップスから ConformReservedProps を除外し、Conform 用プロップスを追加
 */
export type ConformComponentProps<
  T,
  TValue = string,
> = OmitConformReservedProps<T> & ConformFieldProps<TValue>;
