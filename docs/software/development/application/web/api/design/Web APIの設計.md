# Web API の設計

[API 設計の基本原則・手順 - 【Spring Hack】](https://springhack.com/api%E8%A8%AD%E8%A8%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%83%BB%E6%89%8B%E6%B3%95/)

[REST API の設計規則を解説｜設計する際のポイントや必要なスキルもご紹介します｜ SaaS 連携開発ならストラテジット](https://www.strategit.jp/column/041304/)

[Web API 設計入門](https://zenn.dev/nakaryo/articles/87b15866d67efe)

クライアント側が API 設計を主導すると、場当たり的な API が作られがち。
基本的にはサーバー側が主導して、一貫性のある API を作ろう。

以下は少し古いが、API 設計のガイドラインは参考になる。

https://github.com/elsewhencode/project-guidelines/blob/master/README-ja.md

https://qiita.com/KNR109/items/d3b6aa8803c62238d990

設計段階で必要なこと:

1. 扱うリソースを決める
2. どんなメソッドが必要か考える
3. 各メソッドのクエリ（URI 本体とオプション）を決める
4. 認証や認可を決める
5. ステータスコードを決める
6. レスポンスの内容を決める（本文やコンテンツタイプなど）
7. ドキュメントを残す

https://qiita.com/kazuki_tachikawa/items/7dab01ac2ea08b85fb15
