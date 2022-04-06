# Repository

データの保存を責務とする。

Data Access Object の一種。

DDDではドメイン層にインタフェースを置いて、実装をDIする。

データの取得を持たせることがあっても、それは保存のための予備動作。
いろんな取得パターンを作るときは、Repositoryに持たずにQuery Serviceを作った方がいい。
