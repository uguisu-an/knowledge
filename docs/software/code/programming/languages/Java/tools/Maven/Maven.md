# Apache Maven

Java向けのプロジェクト構成ツール。

Project Object Model (POM)の考え方に基づいて、`pom.xml`にプロジェクトの構成をまとめる。

`mvn install`で`pod.xml`を読み込んでプロジェクトを構成する。
設定ファイルの名前が`pod.xml`でないなら、`-f xxx.xml`で明示的に渡す。

Javaの構成ツールには他にGradleやAntがある。
