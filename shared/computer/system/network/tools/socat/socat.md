通信を中継するツール。

基本的な使い方。

```sh
socat tcp:example.com:80,fork,reuseaddr
```

example.com:80のサービスがlocalhost:80で動いているかのように振る舞う。

`fork`をつけないと、接続が切れたらプロセスも落ちる。
`reuseaddr`をつけないと、セッションを使いまわせなくてロックされる。

ポートを変えたい場合は引数を分ける。

```sh
socat tcp-listen:8080,fork,reuseaddr tcp-connect:example.com:80
```

socatはnetcatというツールの拡張版。

プライベートクラウドのDBやサーバーに踏み台サーバーを建てるのにも使う。
