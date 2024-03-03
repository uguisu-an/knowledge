# Modules

GoのパッケージはModuleと呼ぶ。

まずはプロジェクトのフォルダをパッケージとして初期化する。
次のコマンドで`go.mod`を作る。

```
go mod init <module_name>
```

外部パッケージを使う場合、ファイルに`import`を書いて、次のコマンドを実行する。
必要なパッケージを`go.sum`にまとめてくれる。
組み込みパッケージの場合はなくてもいい。

```
go mod tidy
```

https://go.dev/doc/tutorial/create-module
