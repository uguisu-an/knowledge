# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## このリポジトリの性質

- ソフトウェアプロジェクトではないため、ビルドやテストは存在しない。
- 作業の中心はノートを書くこと、整理すること。

## 書式

- フォーマットはHuskyのpre-commitで行うため、個別のフォーマットは不要。
- ノートの書き方は`@docs/conventions.md`を参照すること。

## ディレクトリ構成

トップレベルはコンテキストで分かれている:

- `shared/` — 中核。132 個のトピックフォルダ（`development/`, `business/`, `health/` など）
- `apps/` — 具体的なアプリケーション別のノート（`Claude/`, `Google/`, `Vercel/` など）
- `games/` — ゲーム別のノート
- `tutorial/` — 学習順序や全体像をまとめた入口ドキュメント
- `docs/` — リポジトリ自体に関するドキュメント（構成・書き方・整理方針・ツール）

`docs/map.md` の概念マップと `docs/folder-index.md` がカテゴリ体系の全体像。
フォルダ名は英語（`time/management/` のように一貫した階層なら可）、ファイル名は日本語が中心。

## 整理の方針（詳細は `docs/organization.md`）

- コンテキストを分ける
- コンテキストのコンセプトはREADMEに概要として短くまとめる
- 関連する情報はできるだけ近くに置く
- Obsidian などのツールに依存せず、フォルダでシンプルに整理する（ツールは補助的に使う程度）

## ファイル操作

- ファイルの移動・リネームには `mv` でなく `git mv` を使う
- ファイルの削除には `rm` でなく `git rm` を使う
