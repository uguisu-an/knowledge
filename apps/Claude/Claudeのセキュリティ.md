## 標準の権限設定

- `.mcp.json`を書き換えない（自己改変になるため）

これらは初めからClaude Codeが設定している。

## インシデントの例

- 重要なデータの紛失
- 情報漏洩
- 有害な外部スクリプトの実行
- 有害なライブラリの導入
- バージョン履歴の破壊

## セキュリティ設定のポイント

- ホームの直下でClaude Codeを起動しない
- サンドボックスを使う (`/sandbox`)
- 拒否リストを設定する
  - 機密情報が書かれているファイルを読み取り不可にする
- 致命的な情報を環境変数に入れない（開発用のシークレットなど、すぐに破棄できるものだけにする）
- APIキーの利用範囲を絞る（GitHubなら必要なリポジトリだけとか）

## 提供されている保護機能

- サンドボックス
- 書き込みアクセス制限
- コマンドのホワイトリスト
- 処理の確認

## 権限設定

拒否リストは`settings.json`の`permissions.deny`に設定する。
全体に適用するなら`~/.claude/settings.json`でいい。

`CLAUDE.md`に追加で制約を書くのもいい。

- ファイルを削除する前には必ずユーザーに確認する

コマンドの拒否リストに入れた方がいいもの:

- `Bash(sudo *)`
- `Bash(rm -rf *)`
- `Bash(chmod *)`
- `Bash(chown *)`
- `Bash(curl * | bash)`
- `Bash(git push --force *)`
- `Bash(cat /.env*)`
- `Bash(: > *)`
- `Bash(mkfs *)`

## Sandbox

基本的にいつもサンドボックスで作業した方がいい。
Claude Codeだとデフォルトで有効になっている。
有効になってないなら`/sandbox`を使う。

フォルダ内しか触らなくなるので、確認自体もオートモードでいい。

サンドボックスの中でも、Claudeが外に出ようとすることがある。
いちいち拒否するのは面倒なので、`settings.json`の`sandbox.allowUnsandboxedCommands`をfalseにするといい。

接続先を`sandbox.network.allowedDomains`に設定する。

サンドボックスをそもそも使えない環境ではClaude Code自体を起動しないようにするなら、`sandbox.failIfUnavailable`を`true`にする。

`sandbox.filesystem`系の設定はプロジェクトの`settings.json`に置いた方がいい。

```json
{
  "sandbox": {
    "enabled": true,
    "filesystem": {
      "denyRead": ["~/"],
      "allowRead": ["."]
    }
  }
}
```

`kubectl`, `terraform`, `npm`などはフォルダ外に書き込む必要があるので個別に`allowWrite`で許可する。

## 資料

https://zenn.dev/solvio/articles/27c06e4802aa45
https://www.youtube.com/watch?v=cIliwSnomvY

## その他

そもそもClaude Codeは起動した場所より下の階層のファイルにしか書き込みできない仕様になっている。
ホームなど重要なフォルダで起動しないのも一つのセキュリティ。
