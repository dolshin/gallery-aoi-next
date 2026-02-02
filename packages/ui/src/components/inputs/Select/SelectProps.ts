import type { ReactNode, RefObject } from 'react';

export type SelectItem<Value = string> = {
  label: ReactNode;
  value: Value;
};

type PortalContainer =
  | HTMLElement
  | RefObject<HTMLElement | null>
  | null
  | undefined;

type SelectValueType<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;

export type SelectProps<
  Value = string,
  Multiple extends boolean | undefined = false,
> = {
  /**
   * セレクトアイテム
   */
  items: SelectItem<Value>[];
  /**
   * フォームデータ送信用・RHF登録のための属性
   */
  name?: string;
  /**
   *  プレースホルダー（未選択時に表示されるラベル）
   */
  placeholder?: ReactNode;
  /**
   *  入力値（Controlled Component 用） */
  value?: SelectValueType<Value, Multiple>;
  /**
   *  初期値（Uncontrolled Component 用） */
  defaultValue?: SelectValueType<Value, Multiple> | null;
  /**
   *  選択している値変更時に呼ばれるイベント */
  onValueChange?: (
    value:
      | SelectValueType<Value, Multiple>
      | (Multiple extends true ? never : null),
  ) => void;

  /**
   *  デフォルトで開いているかどうか(Uncontrolled Component 用)
   */
  defaultOpen?: boolean;
  /**
   * 開閉状態を制御するかどうか(Controlled Component 用)
   */
  open?: boolean;

  /**
   * 開閉状態が変化したときに呼ばれるイベント
   */
  onOpenChange?: (open: boolean) => void;
  /**
   *  object value の場合に推奨（hidden input 用の value 文字列化）
   */
  itemToStringValue?: (itemValue: Value) => string;
  /**
   *  object value の場合に任意（Trigger 表示用の label 文字列化）
   */
  itemToStringLabel?: (itemValue: Value) => string;
  /**
   *  モーダル動作（Base UI デフォルト true）
   */
  modal?: boolean;
  /**
   *  hidden input への ref（RHF register や imperative focus 用）
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   *  要素の id 属性
   */
  id?: string;
  /**
   * ポータルを描画するための親要素
   */
  container?: PortalContainer;

  /**
   *  無効化するかどうか
   */
  disabled?: boolean;
  /**
   *  読み取り専用かどうか
   */
  readOnly?: boolean;
  /**
   *  必須かどうか
   */
  required?: boolean;
  /**
   *  複数選択可能かどうか
   */
  multiple?: Multiple;
};
