## UPDATE

UPDATE文も一度テーブルを作るイメージで考えるとわかりやすい。

- `UPDATE a, b SET a.x = b.x WHERE a.id = b.a_id;`
- `UPDATE a JOIN b ON a.id = b.a_id SET a.x = b.x;`

のような書き方で各行を別々の値に変更できる。

SETの左辺が右辺の値に更新される。

複雑なUPDATE文を構築する場合、

`UPDATE a, b SET a.x = b.x`を
`SELECT b.x as a_x FROM a, b`と捉えてテーブルを書き出すとどのように変更されるかわかりやすい。
