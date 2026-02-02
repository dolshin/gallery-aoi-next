/**
 * TextArea コンポーネントのプロップス
 */
export type TextAreaProps = {
  /** フォームデータ送信用・RHF登録のための必須属性 */
  name: string;

  /** コントロールドコンポーネント用の入力値 */
  value?: string;

  /** アンコントロールドコンポーネント用の初期値 */
  defaultValue?: string | number | readonly string[];

  /** 入力値変更時に呼ばれるイベントハンドラ */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /** フォーカスが外れた時に呼ばれるイベントハンドラ */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;

  /** プレースホルダー（入力の補助） */
  placeholder?: string;

  /** ブラウザの自動入力設定（メールなど） */
  autoComplete?: string;

  /** 読み取り専用（入力不可だが選択は可能） */
  readOnly?: boolean;

  /** 列数 */
  cols?: number;

  /** 行数 */
  rows?: number;

  /** リサイズ可否の設定（CSS の resize プロパティに対応） */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';

  /** 幅を親要素いっぱいに広げる */
  fullWidth?: boolean;

  /** 入力可否（UI は FormControl 側で制御 / Input でも念のため受ける） */
  disabled?: boolean;

  /** ref転送対応（RHF register やフォーカス制御に必要） */
  ref?: React.Ref<HTMLTextAreaElement>;

  /** aria-label などアクセシビリティ対応 */
  ariaLabel?: string;

  /** 追加のクラス名（Tailwind 等でスタイル上書きしたい場合） */
  className?: string;
};
