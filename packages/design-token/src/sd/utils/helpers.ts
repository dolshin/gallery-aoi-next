/**
 * 指定したパスに基づいてオブジェクトに値をセットするユーティリティ関数
 * @param target - 値をセットする対象のオブジェクト
 * @param path - 値をセットするパスの配列
 * @param value - セットする値
 * @example
 * const obj = {};
 * assignByPath(obj, ['a', 'b', 'c'], 42);
 * console.log(obj); // { a: { b: { c: 42 } } }
 */
export function assignByPath(
  target: Record<string, unknown>,
  path: readonly string[],
  value: unknown
): void {
  let current: Record<string, unknown> = target;

  for (let i = 0; i < path.length; i++) {
    const key = path[i]!;

    // 最後のキーなら値を代入して終了
    if (i === path.length - 1) {
      current[key] = value;
      return;
    }

    // 途中階層：存在しない or object でない場合は新しく作る
    const next = current[key];
    if (typeof next !== 'object' || next === null) {
      current[key] = {};
    }

    current = current[key] as Record<string, unknown>;
  }
}
