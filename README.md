<h1> 📖ギャラリーアオイ サイト（Newバージョン）</h1>
<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)
![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-1.17.5-F786AD?style=flat-square&logo=vanillaextract)
![Zod](https://img.shields.io/badge/Zod-3.25.64-3167B1?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript)

**旧サイト（Gatsby）からの移行と、**

**新しいスペース追加に伴うサイト構成の拡張に対応するためのプロジェクト**
<br/>

👉 [ギャラリーアオイサイト](https://gallery-aoi.vercel.app)

</div>

<br/>

<h2> 📋 目次 </h2>　
 
- [✨ プロジェクト概要](#-プロジェクト概要)
- [🔄 移行内容](#-移行内容)
- [🗓️ 移行進捗](#️-移行進捗)
- [🛠️ 技術スタック](#️-技術スタック)
- [🎨 デザインシステム](#-デザインシステム)
- [🗺️ サイト構成](#️-サイト構成)
- [💻 開発セットアップ](#-開発セットアップ)
- [🏗 プロジェクト構成](#-プロジェクト構成)
- [📂 フォルダ構成](#-フォルダ構成)
- [💡 設計上のポイント](#-設計上のポイント)
- [🔭今後の展望](#今後の展望)

## ✨ プロジェクト概要

旧サイトでは、「ギャラリーアオイ」単体のランディングページを公開していました。  
実際に運用を続ける中で、サイト経由でのお問い合わせが発生し、予約にもつながりました。

この反応を受けて、運営者より  
「他にも運営している桃花庵・Velza のスペースもサイトに載せたい」  
という要望がありました。

この要望に対応するにあたり、単なるページ追加ではなく、  
将来的なスペース追加や構成変更にも耐えられるよう、  
サイト全体の構成・設計を見直す必要があると判断しました。

そのため本プロジェクトでは、既存サイトを停止せずに段階的に Next.js へ移行し、  
複数スペースを扱えることを前提とした構成へ再設計しています。

## 🔄 移行内容

現在は、ユーザーに影響が出にくい部分から、段階的に以下の移行を行っています。

- Gatsby から Next.js（App Router）への全面書き換え
- 共通で利用される UI コンポーネントの切り出し
- 複数スペースを前提とした URL / ルーティング設計
- スペース単位でブランドテーマを切り替えられる設計

## 🗓️ 移行進捗

現在の進捗状況は、下記のようになっています。

| フェーズ                      | 状態      | 内容                                                                |
| ----------------------------- | --------- | ------------------------------------------------------------------- |
| **1. 移行基盤の構築**         | ✅ 完了   | Next.js（App Router）環境構築、pnpm + Turborepo 導入                |
| **2. 既存LPの移行**           | ✅ 完了   | ギャラリーアオイのランディングページを Next.js へ移行（UI/UX 同等） |
| **3. スタイリング手法の移行** | ✅ 完了   | styled-components → Vanilla Extract へ切り替え                      |
| **4. 複数スペース対応の設計** | ✅ 完了   | スペース単位でページを切り替えられる構成・URL設計                   |
| **5. トップページ作成**       | 🔄 進行中 | 各スペースへの導線となるトップページの新規作成                      |
| **6. 追加スペースLP作成**     | 🔄 進行中 | 桃花庵・Velza 各スペースのランディングページ作成                    |
| **7. ブランドテーマ作成** 　  | ⏳ 未着手 | 各スペースごとのブランドテーマの作成                                |
| **8. 本番デプロイ切り替え**   | ⏳ 未着手 | Vercel への本番デプロイ、DNS 切り替え                               |
| **9. SEO 最適化**             | ⏳ 未着手 | メタ情報整理、構造化データ、サイトマップ対応                        |

## 🛠️ 技術スタック

<h3> 🔄変更のあったもの</h3>

| カテゴリ               | 移行前            | 移行後          | 選定理由                                                  |
| ---------------------- | ----------------- | --------------- | --------------------------------------------------------- |
| フレームワーク         | Gatsby            | Next.js         | データ取得と UI の責務分離（React Server Components）     |
| スタイリング           | Styled Components | Vanilla Extract | ビルド時に CSS を生成し、型安全にスタイルを管理　　　　　 |
| フォームライブラリ     | React Hook Form   | Conform         | Server Actions 前提のフォームライブラリ                   |
| 状態管理               | Zustand           | Cookie          | クライアント状態の最小化 / サーバー側での安全な状態管理   |
| レポジトリ管理         | -                 | Turborepo       | アプリとデザインシステムの依存関係の一元管理              |
| パッケージマネージャー | npm               | pnpm            | ワークスペースを前提とした依存管理                        |

<h3> 📙変更のなかったもの</h3>

| カテゴリ     | 技術     | 選定理由                         |
| ------------ | -------- | -------------------------------- |
| スキーマ     | Zod      | フロント・バック共通スキーマ     |
| メール       | Mailgun  | お問い合わせフォームのメール送信 |
| Headless CMS | microCMS | お知らせ・イベント管理           |

## 🎨 デザインシステム

本プロジェクトでは、自作したデザインシステムを導入しています。<br/>
関連するフォルダは下記の通りです。

```
 1. packages/design-token
 2. packages/icons
 3. packages/theme-contract
 4. packages/forms
 5. packages/ui
```

詳細については、下記のREADMEに記載しております。

- 👉 [README.md](https://github.com/dolshin/dolshin-design-system)

## 🗺️ サイト構成

現在は、ギャラリーアオイ LP 以外は公開できておりません。

| URL               | 対応                | 公開   |
| ----------------- | ------------------- | ------ |
| `/`               | サイトトップ        | 未公開 |
| `/space/aoi`      | ギャラリーアオイ LP | 公開済 |
| `/space/touka-an` | 桃花庵 LP           | 未公開 |
| `/space/velza`    | Velza LP            | 未公開 |

## 💻 開発セットアップ

<h3>🔧 動作環境</h3>

- Node.js：20 以上
- pnpm：9.x 以上

<h3>📦 クイックスタート</h3>

```txt
# リポジトリのクローン
git clone https://github.com/dolshin/gallery-aoi-next.git
cd gallery-aoi-next

# 依存関係のインストール
pnpm install

# 環境変数の設定
cp apps/web/.env.local.example apps/web/.env.local
# .env.local を編集してAPIキーを設定

# 開発サーバーの起動
pnpm run dev
```

<h3>🌍 環境変数設定</h3>

```txt
# microCMS 設定
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# Mailgun 設定
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-mailgun-domain
MAILGUN_FROM=your-mailgun-from-address
MAILGUN_TO=your-email-address

```

<h3>🔄️ 開発ワークフロー </h3>

```txt
# 開発サーバー
pnpm run dev

# ビルド
pnpm run build

# 本番サーバー
pnpm run start
```

## 🏗 プロジェクト構成

本プロジェクトでは、**「ホームページ」** と **「デザインシステム」** をまとめて、**モノレポ**で管理しています。

```txt

├── apps/
│   ├── web/              # ホームページ
│   └── storybook/        # Storybook
│
├── packages/
│   |── config/           # eslint / tsconfig 共有設定
│   ├── design-token/     # デザイントークン
│   ├── forms/            # フォームコンポーネント
│   ├── icons/            # アイコンコンポーネント
│   ├── theme-contract/   # テーマ契約
│   └── ui/               # UI コンポーネント
│
├── tokens.json           # デザイントークン
├── turbo.json            # turborepo 設定
├── pnpm-workspace.yaml　 # ワークスペース設定
└── README.md

```

## 📂 フォルダ構成

下記は、Next.js プロジェクトのフォルダ構成です。<br/>
依存関係を整理し、スペース単位での責務分離を意識した構成にしています。

```txt
apps/web/
├── app/                # App Router
├── features/           # 機能単位の実装
├── components/         # 共通 UI
├── styles/             # グローバルスタイル
├── lib/                # microCMS / util
└── package.json
```

## 💡 設計上のポイント

- **App Router 前提の構成**  
  お問い合わせフォームでは Conform + Server Actions を採用し、  
  クライアント側の状態管理を最小限に抑えた構成としています。

- **自作デザインシステムの組み込み**  
  複数スペースを扱うことを前提に、共通で利用される UI をデザインシステムとして再設計しました。  
  スタイル変更や追加時の影響範囲を限定できる構成を意識しています。

- **スペースごとのテーマ切り替えを想定した設計**  
  各スペースに異なるブランドイメージを持たせられるよう、  
  テーマ切り替えを前提とした構成にしています。

## 🔭今後の展望

- **トップページと各スペースLPを繋ぐ導線の設計をする**
- **各スペースごとにテーマを設定し、各スペースのブランド力を高める**
