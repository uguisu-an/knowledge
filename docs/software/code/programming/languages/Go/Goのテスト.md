組み込みの`go test`と`testing`パッケージでテストできる。

基本的なルール:

- テストはテスト対象と同じフォルダに配置する。
- テストデータは`testdata`フォルダに配置する。
- ファイル名は`*_test.go`とする。
- テスト関数のシグネチャは`func TestXxxx(t *testing.T)`とする。

Goのツールは`testdata`という名前のフォルダを無視してビルドしてくれる。

Goではテストを本体のファイルの近くに置く。jsでもたまに見られるやり方だ。

- user.go
- user_test.go

のように配置する。

基本的にはテスト対象と同じパッケージにすると楽。

テスト用の主な関数:

- `t.Run`: サブテストの定義
- `t.Error`または`t.Errorf`: 失敗
- `t.Fatal`または`t.Fatalf`: 失敗 + テストケースの中止

判定は自前で書かないといけないので、mapの一致をテストするような複雑な比較は`reflect.DeepEqual`や`stretchr/testify/assert`パッケージを使うと便利。

ドキュメント用の例やベンチマークも書ける。
シグネチャを`ExampleXxxx()`や`BenchmarkXxxx(t *testing.B)`にする。

`go test`の主なオプション:

- `-v`: 詳細なログを出力する
- `-cover`: カバレッジを出力する
- `-run <regexp>`: テスト対象を限定する
- `-bench <regexp>`: ベンチマークテストを実行する

カバレッジの詳細を取得するには、`-coverprofile=c.out`で詳細の出力先を指定する。
さらに`go tool cover -html=c.out -o coverage.html`でHTMLに変換すると見やすくなる。

- https://pkg.go.dev/testing
- https://www.twihike.dev/docs/golang-primer/testing
- https://future-architect.github.io/articles/20200601/
- https://qiita.com/hiroyky/items/4a9be463e752d5c0c41c
