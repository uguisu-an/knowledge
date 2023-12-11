Go の考え方:

1. 値とエラーを両方返す
2. finally の代わりに defer
3. プロセスを落とすための panic

他の言語の `throw` のような機構はあえて排除されている。
エラーが発生する関数では通常の戻り値と一緒に `error | nil` を返して、呼び出し側で確認する。

## Reference

- https://zenn.dev/nobonobo/articles/0b722c9c2b18d5
- https://qiita.com/iwakiri0104/items/24d70205aaa2415f0491
