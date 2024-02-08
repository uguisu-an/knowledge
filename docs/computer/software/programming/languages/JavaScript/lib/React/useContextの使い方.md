props を Context の value に変換するのは専用の Provider コンポーネントを用意するのが定石。

設定やテーマ、ユーザーなど複数のコンポーネントを通して利用する情報を Context に持つのがよくある使い方。
どちらかというとキャッシュみたいな使い方をする。

`createContext(defaultValue)` で定義した Context をインポートして、`useContext(Context)` で使う。

処理をまとめるだけならHooksでいい。
ApolloなんかはContextにキャッシュを持って、Hooksで制御する。
