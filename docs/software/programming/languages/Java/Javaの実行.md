ClassPathとMainクラス名を明示して実行する。

```sh
java -classpath src com.example.HelloWorld
```

jarファイルになっていれば、ファイルを指定するだけ。

```sh
java -jar target/HelloWorld.jar
```

jarファイルはproject.properties.main.classで実行するクラスを指定している。
