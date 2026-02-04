import type { MicroCMSListContent, MicroCMSImage } from 'microcms-js-sdk';

/**
 * richEditorV2 は HTML 文字列として扱う
 */
export type RichEditorContent = string;

/**
 * MicroCMS カテゴリ一覧
 */
export type MicroCMSCategories = 'お知らせ' | 'イベント';

/**
 * カテゴリ型
 */
export type MicroCMSCategory = MicroCMSListContent & {
  /** カテゴリ名 */
  name: string;
  /** URLスラッグ */
  slug: string;
};

/**
 * イベントコンテンツ
 */
export type MicroCMSEventContent = MicroCMSListContent & {
  /** タイトル */
  title: string;

  /** 主催者 */
  organizer: string;

  /** 本文（HTML） */
  body: RichEditorContent;

  /** 開催日 */
  startDate: string; // ISO date string

  /** 終了日 */
  endDate: string; // ISO date string

  /** 画像 */
  image: MicroCMSImage;

  /** URLスラッグ */
  slug: string;

  /** カテゴリ（relation） */
  category: MicroCMSCategory;
};
