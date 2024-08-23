## 設定ファイル

Playwrightを実行するフォルダに`playwright.config.ts`を作る。

`@playwright/test`の`defineConfig()`を呼び出して、`export default`で返す。

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // ...
});
```

## テストごとの設定

`@playwright/test`の`test.use()`などを使うと、テストファイルやテスト、テストグループごとにも設定できる。

```ts
test.use({ storageState: "playwright/.auth/admin.json" });

test("user test", async ({ page }) => {
  test.use({ storageState: "playwright/.auth/user.json" });
  // ...
});
```

タイムアウトを設定する場合は`test.setTimeout()`を使う。
デフォルトは`test()`全体が30sで、`expect()`ごとに5sの制限がある。
テストファイルやテストの中で`test.slow()`を呼び出すと、timeoutの時間が3倍になる。
