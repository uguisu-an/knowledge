Go の考え方:

1. 値とエラーを両方返す
2. finally の代わりに defer
3. プロセスを落とすための panic

他の言語の `throw` のような機構はあえて排除されている。
エラーが発生する関数では通常の戻り値と一緒に `error | nil` を返して、呼び出し側で確認する。

`error`は戻り値の最後に返すのが通例となっている。

`error`を作るのは`errors.New`か`fmt.Errorf`を使う。
`fmt.Errorf`は埋め込みなしでも使えるので、全部`fmt.Errorf`でもいい。

## Reference

- https://zenn.dev/nobonobo/articles/0b722c9c2b18d5
- https://qiita.com/iwakiri0104/items/24d70205aaa2415f0491
- https://qiita.com/immrshc/items/13199f420ebaf0f0c37c
- https://www.twihike.dev/docs/golang-primer/errors
