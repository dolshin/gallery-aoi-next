/**
 * 本番環境かどうか
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * ログ出力の共通インターフェース
 *
 * - console を直接使わない
 * - ログレベルを統一
 * - エラーは必ず正規化して扱う
 */
type Logger = {
  debug: (message: string, ...args: unknown[]) => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
};

/**
 * フロントエンドで使用するロガー
 */
export const logger: Logger = {
  /**
   * デバッグ用ログ
   */
  debug: (message, ...args) => {
    if (!isProd) {
      console.debug('[DEBUG]', message, ...args);
    }
  },

  /**
   * 情報ログ
   * - 開発環境のみ出力
   */
  info: (message, ...args) => {
    if (!isProd) {
      console.info('[INFO]', message, ...args);
    }
  },

  /**
   * 警告ログ
   * - 本番でも出すが、機密情報は含めない
   */
  warn: (message, ...args) => {
    console.warn('[WARN]', message, ...args);
  },

  /**
   * エラーログ
   * - error は任意の型を受け取る
   * - context は任意の補助情報
   */
  error: (message, ...args) => {
    console.error('[ERROR]', message, ...args);
  },
};
