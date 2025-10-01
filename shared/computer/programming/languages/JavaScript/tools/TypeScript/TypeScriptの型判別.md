次のように書くと、dataがunknownであってもifの内側ではstringとして認識される。

```ts
if (typeof data === "string") {
  console.log("data: string");
}
```

このような判定を関数にしたい場合、`is`を使って型判別関数を定義できる。

例えば、与えられた引数が文字列かどうか判定するには以下のように書く。

```ts
function isString(data: unknown): data is string {
  return typeof data === "string";
}
```

この関数は`(data: unknown) => boolean`とも取れるが、booleanにしてしまうと関数内でいくら型判別してもコンパイラは認識してくれない。
booleanを`data is string`とすることで特定の引数の型判別をコンパイラが認識する。

型判別関数の中身が間違っていると、静的なチェックは通っても実行時エラーになるので注意。

a is Aは、変数aが型Aかどうかのbooleanでもある。
booleanなんだけど、変数aの型を絞り込んだことをコンパイラに伝える。

型の判別自体はisを使わなくてもできる。型を判別する関数を定義するときにisを使う。

stringをconstのunionやenumにしたいときはisを使った判別用の関数を用意する。
`["a", "b"].includes(data)`みたいな感じ。

- https://qiita.com/ryo2132/items/ce9e13899e45dcfaff9b

isで書かないとbooleanを返す型判別関数を書いても静的解析に影響しない。
