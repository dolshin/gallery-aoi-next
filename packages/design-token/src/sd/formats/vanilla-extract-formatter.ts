import type { FormatFn } from 'style-dictionary/types';
import { assignByPath } from '../utils';

/**
 * semantic tokens -> vanilla-extract createTheme(values) 用の TS object を生成する formatter
 * 動作のポイント:
 * - dictionary.allTokens は SD 側で参照解決済みの値を持つ（outputReferences: false 前提）
 * - transform 済み token.value をそのまま使う（format で値加工しない）
 */
export const vanillaExtractFormatter: FormatFn = ({ dictionary }) => {
  // 1) semantic tokens を取得（事前にセマンティックトークンをフィルター済み)
  const semanticTokens = dictionary.allTokens;
  // 2) 出力結果の object を組み立てる
  const targets: Record<string, unknown> = {};

  for (const token of semanticTokens) {
    const path = token.path; // ["color","text","primary"]
    if (path.length === 0) continue;

    // pathから object を組み立ててトークン値をセット
    assignByPath(targets, path, token.$value);
  }
  // 3) TS object を文字列化して返す
  const header = `
/**
 * Do not edit directly, this file was auto-generated.
 */`;
  const body = `
export const defaultThemeValues = ${JSON.stringify(
    targets,
    null,
    2,
  )} as const;`;

  return `${header}${body}`;
};
