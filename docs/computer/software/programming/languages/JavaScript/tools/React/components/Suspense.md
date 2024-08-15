- [ReactのSuspense対応非同期処理を手書きするハンズオン](https://zenn.dev/uhyo/books/react-concurrent-handson)

Suspenseは、childrenでPromiseがthrowされると、fallbackに設定されたコンポーネントを描画しておき、そのPromiseが解決されたタイミングでchildrenを再描画する。

以下のように、何度描画してもPromiseをthrowするコンポーネントを設置すると、ずっとローディング中になる。
コンポーネント自体は呼び出されるので、1秒ごとにlogが流れる。

```tsx
function AlwaysSuspend(): JSX.Element {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
}
```

Suspenseの子はまだ描画されていないので、Stateなどの副作用は扱えない。
