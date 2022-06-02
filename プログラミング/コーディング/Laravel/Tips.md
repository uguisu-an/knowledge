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

## JSON の書式

JSON のレスポンスでもキーは snake_case にする。
他のライブラリとの兼ね合いで揃えた方がいい。

## 新しいリポジトリを作成する

Laravel のプロジェクトを作る。
Laravel の日本語ファイルをダウンロードする。
Laravel の locale と timezone の設定を ja にする。
GitHub にリポジトリを作る。
GitHub Actions にテストを設定する。
リポジトリに push する。
リポジトリの URL をブックマークする。

## その他

eloquent の relationship だけは snake_case の方が統一感あるかも。

laravel のパッケージ

緯度経度からタイムゾーンを得る。
https://github.com/spatie/google-time-zone

Blade コンポーネントセット。
https://github.com/cagilo/cagilo

綺麗なルート表示。
https://github.com/Wulfheart/pretty-routes

Laravel のルートから Postman のコレクションを作る。
https://github.com/andreaselia/laravel-api-to-postman

既存の DB のダンプファイルからマイグレーションファイルを作る。
https://github.com/bennett-treptow/laravel-migration-generator

bootstrap で作られた jetstream のビューを生成する。
https://github.com/nascent-africa/jetstrap

バリデーションルールの拡張セット。
https://github.com/mattkingshott/axiom

パンくずリストを作る。
https://github.com/diglactic/laravel-breadcrumbs

論理削除をカスケードする。
https://github.com/michaeldyrynda/laravel-cascade-soft-deletes
