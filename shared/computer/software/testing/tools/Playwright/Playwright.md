# Playwright

主な要素:

- browser
- context
- page

browserは各ブラウザの`launch()`で取得できる。

contextは`browser.newContext()`や`page.context()`で取得できる。

pageは`browser.newPage()`や`context.newPage()`で取得できる。

```sh
npm install playwright
```

動かす前にinstallが必要。

```sh
npx playwright install
```

テストに使うときは`@playwright/test`を使う。
jestのような`test()`や`expect()`を使えるようになる。

```sh
npm install @playwright/test
```

テストを実行するときもplaywrightコマンドを使う。

```sh
npx playwright test
```

ブラウザでlocatorを取得したり、RecordingしたりできるCodegenもある。

```sh
npx playwright codegen http://localhost:3000
```

CodeのPlaywright Test拡張もいいみたい。
