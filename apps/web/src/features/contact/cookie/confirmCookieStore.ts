import 'server-only';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { ContactFormSchema } from '../schema';
import {
  CONTACT_CONFIRM_COOKIE,
  CONTACT_CONFIRM_COOKIE_OPTIONS,
} from '../actions/constants';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

/**
 * Cookie に保存されるデータのスキーマ
 */
type ConfirmCookieSchema = typeof ContactFormSchema;

export type ConfirmCookieData = z.infer<ConfirmCookieSchema>;

/**
 * お問い合わせ確認用 Cookie Store
 */
export const confirmCookieStore = {
  /**
   * Cookie から確認用データを取得
   */
  async get(): Promise<RequestCookie | null> {
    const store = await cookies();
    return store.get(CONTACT_CONFIRM_COOKIE) ?? null;
  },

  /**
   * Cookie に確認用データを保存
   */
  async set(value: ConfirmCookieData): Promise<void> {
    const store = await cookies();
    store.set(
      CONTACT_CONFIRM_COOKIE,
      JSON.stringify(value),
      CONTACT_CONFIRM_COOKIE_OPTIONS,
    );
  },

  /**
   * 確認用 Cookie を削除
   * - 送信完了後
   * - フローリセット時
   */
  async clear(): Promise<void> {
    const store = await cookies();
    store.delete(CONTACT_CONFIRM_COOKIE);
  },
};
