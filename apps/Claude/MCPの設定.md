サーバーの導入は、

`claude mcp add <server-name>`

起動コマンドが必要なら、

`claude mcp add <server-name> -- <command> {<args>}`

標準では`local`スコープになっていて、`~/.claude.json`でプロジェクトごとに適用される。
`user`スコープにするとローカルにある全てのプロジェクト、`project`スコープにすると`./.mcp.json`でそのプロジェクトをクローンした全ての人に適用される。
`-s project`のように引数でスコープを変更できる。

Claude CodeのプラグインやMCPサーバー
https://qiita.com/shatolin/items/ca1810e419fee5fd963b

- Context7 MCP: 各種ライブラリやフレームワークの最新情報
- Playwright MCP: ブラウザの操作
- GitHub MCP: GitHubの操作
- Slack MCP: Slackの操作
- Gmail: Gmailの操作
