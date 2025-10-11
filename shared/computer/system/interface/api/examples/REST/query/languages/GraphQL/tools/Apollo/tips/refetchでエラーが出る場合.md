NextJSでrefetchを使っていると、開発環境でホットリロードした際にエラーが出ることがある。
QueryやMutationのオプションに `{ ssr: false }` をつけると改善する。

```js
const { data } = useUsersQuery({
  ssr: false,
});
```
