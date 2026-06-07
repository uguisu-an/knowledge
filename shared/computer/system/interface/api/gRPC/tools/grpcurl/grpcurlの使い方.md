サーバーがTLSに対応していない場合、`-plaintext`オプションで平文を明示する。

サーバーがリフレクションに対応していない場合、`-proto xxx.proto`オプションで定義ファイルを読み込む。

とりあえず`describe`コマンドでサーバーの提供するサービスやメソッドを確認しつつ接続確認する。

```sh
grpcurl example.com:50051 describe
```

`list`でサービスの一覧のみ、`list com.example.ExampleService`でサービスのメソッドの一覧のみを取得できる。
