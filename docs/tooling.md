# 整形・ツール

ビルドやテストはない。ツールは Prettier 整形と Husky の pre-commit のみ。

## コマンド

- `npm run format` — Prettier で全ファイルを整形（`prettier --write .`）

## Prettier

- 設定は `.prettierrc`（`printWidth: 120`）
- 対象外は `.prettierignore`（`*.json` と `node_modules/`）

## Husky / lint-staged

- コミット時に `.husky/pre-commit` が `npx lint-staged` を実行する
- `lint-staged` の設定（`package.json`）: 変更された `*.{js,css,md}` に `prettier --write`

## EditorConfig（.editorconfig）

- インデントはスペース。通常は 4、Markdown は 2
- 改行は LF、文字コードは UTF-8、行末の空白は除去
