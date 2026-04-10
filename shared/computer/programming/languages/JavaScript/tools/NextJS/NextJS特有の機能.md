Reactにない部分を活用することで、Nextを使いこなせる。

## Server/Client Componentの使い分け

- Server Componentを標準にする
- Server Componentは速い
- Server Componentは状態を持たない
  - `useState`や`useEffect`を使えない
- Server ComponentはAPIを介さなくてもデータベースなどにアクセスできる
- Client Componentはできるだけ末端にする (その下は全てClient Componentになる)
  - データはできるだけ上位のServer Componentで取得して渡す
- Server Componentを明示する場合:
  - ファイルがクライアントバンドルに入ったら困る場合
    - 機密情報を扱う場合
    - DBに直接アクセスする場合
    - サーバー専用ライブラリを使う場合

`lib/`ディレクトリがあるなら`lib/server/`と`lib/shared/`で分けておくと、server-only を付けるかどうかの判断も自然に整理される。

## データの取得

- Server Componentでは`db.query`や`fetch`などでAPIやDBからデータを取得できる

## imageやfontの最適化

`next/image`や`next/font`パッケージを使う。

## 意図しないキャッシュに注意する

- `fetch`のオプションにキャッシュ戦略を明示する
- ページ単位でキャッシュ戦略を明示する

## API Routesを薄く保つ

API Routesはレスポンスを返すことだけを考えて、その取得や構築は`lib/`に分離する。
外部からアクセスさせたくない処理はServer Componentから直接`lib/`を呼べばいい。APIを経由しない。

API Routeは外部クライアント（モバイルアプリ等）向けか、フォーム送信のServer Actionsで代替できないかを先に考えると良い。

フォーム処理などもServer Actionsを使って、APIにしない。
FormDataを受け取ってデータベースに書き込む処理などをServer Componentで処理する。
