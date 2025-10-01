`goenv`のような環境管理ツールは非推奨になった。

go installから特定のバージョンをインストールして、`go1.10.7 run main.go`のように使う。
go本体は最新版を使えばいい。

```sh
go install golang.org/dl/go1.10.7@latest
go1.10.7 version
```

- https://go.dev/doc/manage-install
