`vi.mock`はライブラリをモックしている。

以下の例だと、Nextの画面遷移に使われる内部の関数を置き換えている。

```
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => new URLSearchParams(),
}));
```

この場合、`router.push`を`router.replace`や`redirect`に切り替えるとテストは失敗してしまう。
これを内部実装の変更（リファクタリング）と捉えるのか、動作の変更と捉えるのかは意見が分かれるけど、実務上は動作の変更と捉えてテストも修正した方が、E2Eテストを管理するよりは楽。
