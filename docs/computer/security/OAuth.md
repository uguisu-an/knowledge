# OAuth

認可のための規格。

以下の記事の解説がわかりやすい。

[一番分かりやすい OAuth の説明 - Qiita](https://qiita.com/TakahikoKawasaki/items/e37caf50776e00e733be)

トークンの Scope はユーザーの権限というよりもクライアントの権限。
Scope は「どの機能が使えるか」を表して、ユーザーの場合は「何を操作できるか」と言ったところか。

OAuth で最初に認可を求める部分は、Client の認可を求めている。
User は認可した Client を用いてサービスにアクセスする。

トークンのScopeがわかっていれば、Clientがどれかは気にしなくていい。ServerはとにかくトークンのScopeを見て、認可を確認する。
