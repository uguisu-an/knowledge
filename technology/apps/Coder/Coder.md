# Coder

https://coder.com/

Web IDE の一種。
Web 上で Kubernetes の Pod を動かしていて、実行環境と IDE を提供している。
ブラウザで IDE を使うこともできるし、ローカルの vscode から接続することもできる。

コマンドで操作したいなら、Coder CLI がある。

Coder CLI で SSH 接続するなら、クライアントとサーバーのバージョンが一致していないと失敗する。

ブラウザ上で使える IDE は code-server と呼ぶ。

code-server の場合、Web アプリを localhost で起動しても勝手にホストしてくれないので、Coder の操作画面でポートを指定して開く。

プロキシなどで VSCode 上の Coder 拡張の login が失敗すると、その後の SSH 接続もできない。
まずログインでステータスコード 500 のエラーが出て、次に `Could not establish connection to "coder.{MyWorkspace}"` のようなエラーが出る。
正確には、内部で `coder login` ができないと `coder config-ssh` ができないので、接続情報が足りない。

VSCode で接続するときは内部的に `coder vscodessh` が使われている。

プロキシを挟んだりしていると VSCode の Coder 拡張で `coder login` できないことがある。(2024-02-01 現在)

vscodessh で使うべき ssh/config は以下のような形になる。
login できないときは以下の ssh/config を自前で書いて無理やり通せる。
`/bin/coder` には Coder CLI の実行ファイル、`/dir/to/coder/extension` には coder.coder-remote データファイルのフォルダを指定する。
例えば、Windows だったら `C:\Program Files\Coder\bin` と `C:\Users\{UserName}\AppData\Roaming\Code\User\globalStorage\coder.coder-remote` のようになる。

```
Host coder-vscode-*
  ConnectTimeout=0
  LogLevel ERROR
  SetEnv CODER_SSH_SESSION_TYPE=vscode
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null
  ProxyCommand "{/bin/coder}" vecodessh --network-info-dir "{/dir/to/coder/extension}/net" --log-dir "{/dir/to/coder/extension}/log" --session-token-file "{/dir/to/coder/extension}/session_token" --url-file "{/dir/to/coder/extension}/url" %h
```

Web アプリを開発するときは起動したページ、例えば localhost:3000 はうまいこと処理してくれるけど、内部で呼び出している localhost:3001 みたいなバックエンドなどは読み込めない。
その場合、ブラウザを開く側で `coder port-forward MyWorkspace 3001:3001` のようにポートフォワードしてやると見れる。

```
coder login
coder config-ssh
coder ssh coder.{MyWorkspace}
```
