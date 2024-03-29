# DDD Design Pattern

DDD でついでに紹介されているデザインパターン。

## 注意

DDD はデザインパターンにも目が行きがちだが、もっと大事なのはドメインやコンテキストの境界を明確にすること。

「境界づけられたコンテキスト」を先に学ぼう。

## デザインパターンの種類

- Entity
- Value Object
- Domain Service
- Domain Event
- Aggregate & Repository
- Policy (Strategy)
- Application Service

DDD でもサービスクラスは最終手段というか、実質的にトランザクションスクリプトなので使い所には気をつけないといけない。
トランザクションスクリプトはどっちみち存在するけど、処理本体はちゃんと構造化して切り出して、トランザクションスクリプトを最小にする。
