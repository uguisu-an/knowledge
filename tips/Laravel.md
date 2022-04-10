## 認証・認可は組み込みの機能に任せる

認可は、認証・認可コンテキストに任せる。
（Laravel でいえば Guard や Gate/Policy）

例えば、以下のようなアクションになる。

```
$this->middleware('auth:api');
$this->authorize('create', Project::class);
$this->usecase->createProject(auth()->id(), ...);
```

## 組み込みのバリデーションはテストしない

バリデーションはフレームワーク側でテストされているので、テストする優先度は低い。
自分で作った複雑なバリデーションは Rule に切り出して、個別にテストする。

## ファイルを監視して画面をリロードする

`webpack.mix.js` に以下の処理を追記する。

```js
mix.browserSync("localhost");
```

あとは `npm run watch` するとリロードされるようになる。

https://readouble.com/laravel/8.x/ja/mix.html#browsersync-reloading
