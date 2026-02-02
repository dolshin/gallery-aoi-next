/**
 * ログレベルの定義
 */
export const LogLevelOrder = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  silent: 4,
} as const;

export type LogLevel = keyof typeof LogLevelOrder;

/**
 * 指定したログレベルでログを出すべきか判定する
 */
export function shouldLog(current: LogLevel, level: LogLevel): boolean {
  return LogLevelOrder[level] >= LogLevelOrder[current];
}
