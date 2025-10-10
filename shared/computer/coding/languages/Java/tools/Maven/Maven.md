# Apache Maven

Java向けのプロジェクト構成ツール。

Project Object Model (POM)の考え方に基づいて、`pom.xml`にプロジェクトの構成をまとめる。

`mvn install`で`pod.xml`を読み込んでプロジェクトを構成する。
設定ファイルの名前が`pod.xml`でないなら、`-f xxx.xml`で明示的に渡す。

Javaの構成ツールには他にGradleやAntがある。

`mvn package`は`mvn validate`, `mvn compile`, `mvn test`を実行する。

Antの設定ファイルを作る`ant:ant`やJavadocを生成する`javadoc:javadoc`のようなプラグインもある。

`project.properties.main.class`でjarのmainになるクラスを指定する。
