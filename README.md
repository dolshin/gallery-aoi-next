# ギャラリーアオイ プロジェクト

すでに作成済みの下記のGatsby.jsプロジェクトをNext.jsに移行し、Next.js+NestJSで、予約機能・管理機能を追加する予定。
---

## ⚙️ 現状の開発状況

現在は **開発環境構築とプロジェクト基盤整備** が完了しています。  
以下のタスクが完了済みです：

- ✅ Turborepo + pnpm によるモノレポ構成
- ✅ Docker + PostgreSQL によるローカル開発環境
- ✅ Next.js / NestJS の初期セットアップ
- ✅ ESLint / Prettier 設定
- ✅ Prisma ORM 導入（データベースマイグレーション準備）

アプリケーションとしてはまだ**UIやAPIの開発には着手していません**。

---

## 🗓 開発ロードマップ（予定）

| フェーズ | 期間目安 | 内容 |
|-----------|-----------|------|
| **Phase 1：環境構築** | 完了 | Monorepo 構成、Docker 環境、Lint/Format、DB 接続設定 |
| **Phase 2：Gatsby → Next.js 移行** | 〜2026年1月 | 既存サイト（Gallery Aoi）のUI/UXを Next.js へ移行（App Router 対応） |
| **Phase 3：API基盤構築（NestJS）** | 〜2026年2月 | Prisma モデル設計、Controller / Service / Repository の分離、DI構築 |
| **Phase 4：認証機能の実装** | 〜2026年4月 | JWT + CSRF対応のログイン/リフレッシュ/ログアウト |
| **Phase 5：予約カレンダー機能** | 〜2026年5月 | フロントから予約状況を確認・登録できるUIを構築 |
| **Phase 6：管理者ダッシュボード** | 〜2026年6月 | 管理者向け予約一覧・更新・削除機能、集計画面を追加 |
| **Phase 7：デプロイ & 運用開始** | 〜2026年7月 | Render（API）・Netlify（Web）で本番運用開始予定 |

---
## プロジェクト構成

```
apps/
 ├─ web/        # Next.js (Frontend)
 └─ api/        # NestJS (BFF / Backend)
packages/
 ├─ ui/         # MUIラッパー・共通UIコンポーネン
 ├─ db/         # Prisma + Neon(PostgreSQL)
 ├─ config/     # ESLint / TSConfig / Prettier共有
 └─ types/      # 型共有パッケージ
infra/
 └─ docker/     # Dockerfile / docker-compose / env
```

---

## ⚙️ 使用技術・主要ライブラリ

| 分類               | ツール / ライブラリ          | バージョン      | 備考                                    |
| ------------------ | ---------------------------- | --------------- | --------------------------------------- |
| **Node.js**        | Node.js                      | **20 LTS**      | Render, Docker と互換                   |
| **パッケージ管理** | pnpm                         | 9.15.0          | 固定管理                                |
| **モノレポ管理**   | Turborepo                    | 最新            | `pnpm build`, `pnpm dev` で一括管理     |
|                    | TypeScript                   | 5.9.3           | プロジェクト全体で統一                  |
| **フロントエンド** | Next.js                      | 15.x            | App Router構成（Server Components対応） |
|                    | React                        | 18.x            |                                         |
|                    | Material UI (MUI)            | 6.x             | 独自ラッパーを `@aoi/ui` として管理     |
|                    | React Query (TanStack Query) | 5.x             | データフェッチングとキャッシュ管理      |
| **バックエンド**   | NestJS                       | 10.x            | BFF兼バックエンド（認証・API）          |
|                    | Prisma                       | 5.x             | ORM (Neon接続)                          |
|                    | PostgreSQL                   | Neon (クラウド) | SSL必須 (`sslmode=require`)             |
| **Lint / Format**  | ESLint                       | 9.10.x          | モノレポ共通設定 (`packages/config`)    |
|                    | @typescript-eslint/\*        | 7.18.x          | TypeScript対応ルール                    |
|                    | Prettier                     | 3.3.x           | コードフォーマット統一                  |
| **CI / CD**        | GitHub Actions               | 最新            | `build → test → deploy` パイプライン    |
|                    | Render                       | 最新            | Web / API 別サービス構成                |
| **Container**      | Docker                       | 26.x            | multi-stage build 対応                  |
|                    | docker-compose               | 2.x             | ローカル開発用                          |
| **Infra (DB)**     | Neon                         | 最新            | 永続データベース                        |
| **Email**          | Mailgun API                  | 最新            | お問い合わせ送信処理用                  |

---

## 📦 ディレクトリ別 `.env` ファイル

| ファイル           | 用途                                    |
| ------------------ | --------------------------------------- |
| `.env`             | 共通設定（NODE_ENVなど）                |
| `apps/web/.env`    | フロント用（`NEXT_PUBLIC_*` 変数）      |
| `apps/api/.env`    | バックエンド用（JWT, CSRF, DB接続など） |
| `packages/db/.env` | Prisma CLI用                            |
| `.env.local`       | ローカル開発用                          |
| `.env.staging`     | ステージング環境用                      |
| `.env.test`        | テスト実行用                            |

---

## 🚀 開発環境セットアップ
　### 現在作成中 ###

## 🧱 Docker構成

```bash
# ローカル開発用ビルド
docker compose up --build

# Dockerfile例
# apps/web/Dockerfile
# apps/api/Dockerfile
```

- multi-stage構成 (`builder` → `runner`)
- `.dockerignore` によりビルド効率最適化  
  （`node_modules`, `.next`, `dist` は除外）

---

## 🔍 スクリプト一覧

| コマンド              | 説明                            |
| --------------------- | ------------------------------- |
| `pnpm dev`            | 全サービスを同時起動            |
| `pnpm build`          | すべてのアプリをビルド          |
| `pnpm lint`           | ESLintを実行                    |
| `pnpm format`         | Prettierで整形                  |
| `pnpm prisma:migrate` | DBマイグレーション              |
| `pnpm prisma:studio`  | Prisma Studio起動               |
| `pnpm test`           | テスト実行（Jest / Vitest想定） |

---

## 🔒 セキュリティ設計（実装予定）

- CSRF 対策（Double Submit Cookie）
- JWT + Refresh Token 認証
- Cookie SameSite/Lax 設定
- Zod による入力バリデーション
- Prisma Query Sanitization

---

## 🧠 設計思想

### Clean Architecture
- `Controller → Service → Repository` の依存方向を明確化  
- ドメインロジックを中心に据えた責務分離設計

### DI（Dependency Injection）
- NestJS の DI コンテナを活用して依存を注入  
- テスト性と変更耐性を確保

---


## 🧩 バージョン固定設定

`package.json`（ルート）：

```json
{
  "packageManager": "pnpm@9.15.0"
}
```

`pnpm` 内で統一：

```json
{
  "pnpm": {
    "overrides": {
      "typescript": "5.5.4",
      "eslint": "9.10.0",
      "@typescript-eslint/parser": "7.18.0",
      "@typescript-eslint/eslint-plugin": "7.18.0"
    }
  }
}
```

---

## 🧠 推奨Node / PNPMバージョン管理

| ツール  | 推奨バージョン | 備考                              |
| ------- | -------------- | --------------------------------- |
| Node.js | 20.x LTS       | `corepack` 対応済み               |
| pnpm    | 9.15.0         | `packageManager` フィールドで固定 |

---
