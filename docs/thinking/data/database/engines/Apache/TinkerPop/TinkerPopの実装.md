## Amazon Neptune

idは文字列で、指定しないとUUIDになる。

Neptuneでサポートされていない操作について:

- https://docs.aws.amazon.com/ja_jp/neptune/latest/userguide/access-graph-gremlin-differences.html
- https://docs.aws.amazon.com/ja_jp/neptune/latest/userguide/gremlin-step-support.html

`io()`や`program()`は対応していない。

クエリをテキスト文字列で送ると`sideEffect()`, `from()`, `to()`も使えない。
