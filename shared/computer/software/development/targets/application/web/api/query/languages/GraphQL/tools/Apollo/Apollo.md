# Apollo

https://www.apollographql.com/

GraphQLのクライアントやサーバーを開発するためのライブラリ。

サーバー側は NodeJS, クライアント側は React,Kotlin, Swift で使えるライブラリ。
スキーマファイルからサーバーの API やクライアント、型宣言を生成できる。
サーバー側はリゾルバという仕組みで詳細を組み込む。

情報が足りなくて後で読みたいときはlazyを使うよりもコンポーネントを分けて段階的に読み込んだ方がいい。

stateに突っ込むならapolloというよりもfetchで能動的に取りたいことが多い。
それかuseEffectでdataの更新に合わせてStateに突っ込むか。

fetchPolicyの設定は、
データの変更が多かったらcache-and-network,
データの変更が少なかったらcache-firstが基本。
例えばマスタデータなんかはほぼ更新されないのでcache-firstでいい。

ApolloのHooksはそもそもuseEffectのようなタイミングで処理している。

Apolloで生成した関数で書くとGraphQLのQueryと処理が離れてしまうのも少し使いづらい。
Queryを直接叩いて自分でオブジェクトに変換した方がいいかも。
