classファイルがあるパスをclasspathという。
`src`などにファイルを置いていると、`java -classpath src com.example.Example`のようにclasspathを指定して実行する。
パッケージのルートが入っているフォルダを列挙する。

classファイルはclass名を指定して実行するが、jarファイルにするとファイル名だけで実行できる。
`java -jar target/Example.jar`のような呼び出し方になる。

Mavenのような構成ツールを使って、jarにするのが簡単。
