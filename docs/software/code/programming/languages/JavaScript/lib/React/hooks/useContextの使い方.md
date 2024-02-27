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

データ自体は、Contextで持っていい。
変な処理が混ざっているとごちゃごちゃする。

ContextとHookをワンセットで作ってStore代わりにする`unstated-next`というライブラリもある。

Contextはグローバル変数なので、使いすぎると読みづらい。
正しく制御しなければならない。依存関係を一方通行にする。

コンテキストの適用範囲を決めるProviderと、データにアクセスするConsumerの役割がある。

Contextを使わずに、Propsにコンポーネントを渡して制御の方向を変えるアイデアもある。

ContextでできることはPropsでもできる。
基本はPropsで、何階層も上とやりとりする必要が多かったらContextを検討する。

`unstated-next`はContainerでContextとHooksのセットをまとめて作ってくれる。
StateをContextで共有するHooksが簡単に作れる。
ただ、便利すぎるので、Store以外の用途でも使えてしまう。

ダイアログの状態を保持するだけのコンテキストとか、便利だからといって別にキャッシュしなくていいものまでコンテキストにするのはやりすぎ。
