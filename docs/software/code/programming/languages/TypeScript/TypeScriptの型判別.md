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
