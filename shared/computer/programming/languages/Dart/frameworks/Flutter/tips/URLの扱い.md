# URL の扱い

Hash モードと Path モードがある。
Path モードを使う場合、Web サーバーのリライト設定が必要。

デフォルトは Hash モードになっている。

ルート以外のパスに Flutter アプリを配置するなら、`web/index.html` の `<base>` タグを書き換える。

## Reference

https://docs.flutter.dev/development/ui/navigation/url-strategies

https://zenn.dev/tsuruo/articles/773a5a7ca14924
