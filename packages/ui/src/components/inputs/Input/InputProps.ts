export type InputProps = {
  /** 入力種別 (text / email / password / number など) */
  type?: React.HTMLInputTypeAttribute;

  /** フォームデータ送信用・RHF登録のための必須属性 */
  name: string;

  /** 入力値（Controlled Component 用） */
  value?: string | number;

  /** 初期値（Uncontrolled Component 用） */
  defaultValue?: string | number;

  /** 値変更時のイベント (RHF の field.onChange と連携) */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** フォーカスが外れたときに発火（RHF の field.onBlur と連携） */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /** プレースホルダー（入力の補助） */
  placeholder?: string;

  /** 自動補完制御 (email, username, address-line1 など) */
  autoComplete?: string;

  /** 半角/全角など入力モードの指定（スマホキーボード対応に重要） */
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];

  /** 最大文字数（文字数制限を UI & SRへ通知） */
  maxLength?: number;

  /** 最小文字数（パスワード・ユーザー名で利用多い） */
  minLength?: number;

  /** 入力可否（UI は FormControl 側で制御 / Input でも念のため受ける） */
  disabled?: boolean;

  /** ref転送対応（RHF register やフォーカス制御に必要） */
  ref?: React.Ref<HTMLInputElement>;

  /** aria-label などアクセシビリティ対応 */
  ariaLabel?: string;

  /** 追加のクラス名（スタイル上書きしたい場合用） */
  className?: string;
};
