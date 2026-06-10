# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## このリポジトリの性質

ソフトウェアプロジェクトではなく、日本語の個人ナレッジベース（約 9,000 個の Markdown ノート）。
ビルドやテストは存在せず、ツールは Prettier による整形と Husky の pre-commit のみ。
作業の中心は「ノートを書く・整理する」こと。

## コマンド

- `npm run format` — Prettier で全ファイルを整形（`printWidth: 120`、`*.json` と `node_modules/` は対象外）
- コミット時は Husky の pre-commit が `lint-staged` を起動し、変更された `*.{js,css,md}` に Prettier をかける

## ディレクトリ構成

トップレベルはコンテキストで分かれている:

- `shared/` — 中核。132 個のトピックフォルダ（`development/`, `business/`, `health/` など）
- `apps/` — 具体的なアプリケーション別のノート（`Claude/`, `Google/`, `Vercel/` など）
- `games/` — ゲーム別のノート
- `tutorial/` — 学習順序や全体像をまとめた入口ドキュメント
- `docs/` — リポジトリ自体に関するドキュメント（構成・書き方・整理方針・ツール）

`docs/map.md` の概念マップと `docs/folder-index.md` がカテゴリ体系の全体像。
フォルダ名は英語（`time/management/` のように一貫した階層なら可）、ファイル名は日本語が中心。

## ノートの書き方（重要な慣習）

新規ノートや編集時は既存ファイルのスタイルに合わせる:

- ノート間は `[[...]]` や相対パスリンクで繋がず、各ノートは独立。外部参照は通常のリンク（Amazon など）で記す
- フォルダ直下の `README.md` はそのフォルダの定義。`概要文 → ## Keywords → ## References` の構成（`shared/development/README.md` が見本）
- 整形ルールは`@.editorconfig`に従う

## 整理の方針（詳細は `docs/organization.md`）

- コンテキストを分ける
- コンテキストのコンセプトはREADMEに概要として短くまとめる
- 関連する情報はできるだけ近くに置く
- Obsidian などのツールに依存せず、フォルダでシンプルに整理する（ツールは補助的に使う程度）

## ファイル操作

- ファイルの移動・リネームには `mv` でなく `git mv` を使う
- ファイルの削除には `rm` でなく `git rm` を使う
