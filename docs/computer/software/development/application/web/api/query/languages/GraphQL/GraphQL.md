API のためのクエリ言語。

HTTP 通信の上で動いて、GraphQL のクエリを送るとアクセスできる。
エンドポイントとしては一つだけ、GraphQL を受け付けるパスを用意するのが一般的。

[GraphQL 実践ノウハウ/graphql-knowhow - Speaker Deck](https://speakerdeck.com/sonatard/graphql-knowhow)

レスポンスが error を持っていて、拾っても拾わなくてもいいのが Golang っぽい。

GraphQL のクエリ言語に何が使えるかもスキーマで定義する。Query, Mutation, Subscription を type で定義する。リゾルバーと一致させる。

[GraphQL の基礎の基礎 #JavaScript - Qiita](https://qiita.com/shotashimura/items/3f9e04b93e79592030a4)

fragment はクエリ側、クライアント側で作ると、クエリの中で使いまわせる。
