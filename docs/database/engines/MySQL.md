パフォーマンスの解析

https://tech.excite.co.jp/entry/2021/12/16/180327

MySQL互換のTiDBというHTAPデータベースもある。

dockerのmysqlは`/entrypoint-initdb.d/`にある`.sh, .sql, .sql.gz`を名前順に実行してくれる。
volumeとしてsqlファイルをマウントしておくとテーブルを作れる。

mysqldumpのよく使うオプション:

- `--databases`: dumpするデータベースを限定する
- `--add-drop-database`: drop databaseをcreate databaseの前に追加する
- `--add-drop-table`: drop tableをcreate tableの前に追加する
- `--ignore-table`: 指定したテーブルをdumpしない
- `--no-create-info`: create tableをdumpしない（データのみ）
- `--no-data`: データをdumpしない
