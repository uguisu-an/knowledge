- Rule
- Skill: よく使うプロトコルを定義する
- Agent: メインのコンテキストとは分離されたコンテキストで実行する
- Hook: 特定のタイミングでコマンドを実行する
- Plugin

https://qiita.com/kyuko/items/77e9e022860b57e4bd4d

## Rule

`CLAUDE.md` または `rules/*.md` に記載したプロンプトはすべてのプロンプトの前提として読み込まれる。

## Skill

指示の短縮形。
特定のスコープやワーフクローに制限されたルールのように機能する。

Skillとして定義して、Slash Commandで呼び出す。

## Hook

特定のイベントで発火する処理。

- ツール実行前
- ツール実行後
- メッセージ送信時
- Claudeの応答終了時
- コンテキスト圧縮前
- 権限リクエスト

## Agent

メインのClaudeとはコンテキストの異なる指示を実行する。

## Plugin

Skill, Slash Command, Hook, などを簡単にインストールできるパッケージにする。
