主にキャッシュのような使い方をする。

- 設定
- テーマ
- 認証・認可情報
- ダウンロードしたデータ

props を Context の value に変換するのは専用の Provider コンポーネントを用意するのが定石。

`createContext(defaultValue)` で定義した Context をインポートして、`useContext(Context)` で使う。

処理をまとめるだけならHooksでいい。
ApolloなんかはContextにキャッシュを持って、Hooksで制御する。

複数のコンポーネントを通して利用する情報を持つことが多いけど、本質的ではない。
Contextありきで複数コンポーネントに持たせようとするとグローバル変数と同じ。
