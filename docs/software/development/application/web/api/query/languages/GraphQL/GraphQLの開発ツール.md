## Apollo

サーバー側は NodeJS, クライアント側は React,Kotlin, Swift で使えるライブラリ。
スキーマファイルからサーバーの API やクライアント、型宣言を生成できる。
サーバー側はリゾルバという仕組みで詳細を組み込む。

情報が足りなくて後で読みたいときはlazyを使うよりもコンポーネントを分けて段階的に読み込んだ方がいい。

stateに突っ込むならapolloというよりもfetchで能動的に取りたいことが多い。

## Visual Studio Code

以下の拡張機能を使うといい。

- [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
