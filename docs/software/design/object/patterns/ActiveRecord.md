ActiveRecord 系の ORM は特殊なテーブル設計に向いてない。
そもそもテーブルとエンティティを 1:1 で対応させて、操作は CRUD と単純に対応する形で扱うためのものだ。

本格的にデータベースをチューニングするなら ActiveRecord 系の ORM では厳しいことがある。
その場合、もっとシンプルなデータベースアクセスの仕組みを用意したり、Read/Write のデータベースを分けたりといった対処方法がある。
