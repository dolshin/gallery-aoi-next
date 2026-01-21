import * as React from 'react';

export type FormControlProps = {
  /** フィールドのラベル */
  label?: React.ReactNode;
  /** 補足テキスト */
  supportingText?: React.ReactNode;
  /** エラーメッセージ */
  errorText?: string;
  /** エラー状態かどうか*/
  error?: boolean;
  /** 必須項目かどうか*/
  required?: boolean;
  /** 無効状態かどうか */
  disabled?: boolean;
  /**
   * 触れたかどうか（blur 済みか）。指定されない場合は error があれば常に表示。
   * RHF の fieldState.isTouched をそのまま渡す想定。
   */
  touched?: boolean;
  /** 内部に描画する実際の入力コンポーネント（Input など） */
  children: React.ReactNode;
  /** 外側のラッパー用クラス名 */
  className?: string;
};

export type FormControlPropsWithoutChildren = Omit<
  FormControlProps,
  'children'
>;
