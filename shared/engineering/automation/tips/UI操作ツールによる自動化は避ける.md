多くの RPA ツールは UI 操作ツールになっているが、UI は変わりやすい部分なので、依存するべきではない。
データの取得や操作は Web API や DB 接続を用いた方がいい。直接接続できないなら ETL (Extract/Transform/Load) も検討する。
