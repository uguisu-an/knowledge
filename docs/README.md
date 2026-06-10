# docs — リポジトリのドキュメント

ナレッジベース「そのもの」に関するメタ情報をまとめた場所。知識の中身（ノート）は
`shared/`・`apps/`・`games/` などに置き、ここにはリポジトリの構成・書き方・整理方針・
ツールだけを置く。

## 目次

- [map.md](map.md) — 概念マップ（ナレッジ全体の概念のつながり。フォルダ構造とは別）
- [conventions.md](conventions.md) — ノートの書き方の慣習
- [organization.md](organization.md) — 整理の方針と進め方（フラット・文脈分離・統廃合・`/recat`）
- [folder-index.md](folder-index.md) — トップレベル構成と `shared/` 直下 138 フォルダの索引
- [tooling.md](tooling.md) — 整形・ツール（Prettier / Husky / EditorConfig）

## このリポジトリの性質

ソフトウェアプロジェクトではなく、日本語の個人ナレッジベース（約 9,000 個の Markdown
ノート）。ビルドやテストは存在せず、ツールは Prettier による整形と Husky の pre-commit
のみ。作業の中心は「ノートを書く・整理する」こと。
