サーバーの導入は、

`claude mcp add <server-name>`

起動コマンドが必要なら、

`claude mcp add <server-name> -- <command> {<args>}`

標準では`local`スコープになっていて、`~/.claude.json`でプロジェクトごとに適用される。
`user`スコープにするとローカルにある全てのプロジェクト、`project`スコープにすると`./.mcp.json`でそのプロジェクトをクローンした全ての人に適用される。
`-s project`のように引数でスコープを変更できる。
