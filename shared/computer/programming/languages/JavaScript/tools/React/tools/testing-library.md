# testing-library

testing-libraryでは、getByRoleやgetByTextを使って、ユーザー視点でテストする。

フォームの場合はgetByLabelTextでもいい。

getByPlaceholderTextはWAI-ARIAを意識しなくても使えるけど、補助的な機能として捉える。できるだけgetByRoleを使う。

testing-libraryを使う場合は主に複数のコンポーネントを統合したテストにするべき。ただし、バリデーションやカスタムフックなどの複雑なロジックをコンポーネントでテストしないといけない場合は単独でテストすることもある。
バリデーション自体はロジックとして切り出してtesting-libraryとは別にテストする方法もあるが、表示まで含めて試したいならtesting-libraryでテストする。

要素を取得する方法の優先順位

1. getByRole: 役割
2. getByLabelText: 関連づけられた`<label>`や`aria-label`の値
3. getByText: テキスト
4. getByPlaceholderText: プレースホルダー
5. getByDisplayValue: フォームの値
6. getByAltText: alt属性
7. getByTitle: ツールチップ
8. getByTextId: どうしても取得できない時の最終手段

まぁ、基本的にはgetByRoleかgetByTextで完結するようにプロダクトを作る。
getByLabelTextで取れるなら基本的にはgetByRoleで取れる。

API通信などが入る読み込み待ちがあるなら、getByの代わりにfindByを使う。

ないことを確認するならgetByの代わりにqueryByを使う。

ページ移動とかフォーム送信をテストするときはrouterをモックする方法もあるけど、mswでモックして大きな単位でテストする方法もある。ただ、一つのコンポーネントにならない場合もあるのでrouterの方がテストは小さくなる。
