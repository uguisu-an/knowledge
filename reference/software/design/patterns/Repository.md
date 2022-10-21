# Repository

データの保存を責務とする。

Data Access Object の一種。

DDD ではドメイン層にインタフェースを置いて、実装を DI する。

データの取得を持たせることがあっても、それは保存のための予備動作。
いろんな取得パターンを作るときは、Repository に持たずに Query Service を作った方がいい。
