jsのファイルはまずコンポーネントなら一つのファイルが基本だけど、関数を一つのファイルにすることもある。ただ、小さな関数なら一つのファイルに入れて一つのパッケージのようにすることもある。ファイルに複数の関数を書く利点は、プライベートな変数や関数を作れるところ。exportしなかった変数や関数にはアクセスできない。

一つのファイルに一つのクラスや関数を置いて、フォルダのindexで集約するのが基本。
ファイルを分けておけばファイル内だけの変数や関数は外から見えない。

jsのファイルはオブジェクトと同じなので、ファイルでできることはオブジェクトでもできる。

JavaScriptで関数を共通化する場合は一つの関数が一つのファイルになっているくらい小さく分けていい。
その上でそれらをまとめるモジュールを別途作る。

JavaScriptのようにファイルがモジュールになる場合でも、同じファイルの中でファイルスコープの変数を使うものと使わないものに分かれるならモジュールとしても分けたほうがいい。
