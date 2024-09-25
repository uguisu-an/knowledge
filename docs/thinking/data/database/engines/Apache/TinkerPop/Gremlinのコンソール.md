まとめてdockerで動かすと簡単に試せる。

- tinkerpop/gremlin-server
- tinkerpop/gremlin-console

composeのvolumesやdocker cpでconf/remote.yamlを設定して、次のコマンドでサーバーに接続する。

`conf/remote.yaml`の接続先はdockerのネットワークにする。

```diff
+ hosts: [host.docker.internal]
- hosts: [localhost]
  port: 8182
  serializer: { className: org.apache.tinkerpop.gremlin.util.ser.GraphBinaryMessageSerializerV1, config: { serializeResultToString: true }}
```

`docker-compose.yaml`の例:

```yaml
version: "3"
services:
  server:
    image: tinkerpop/gremlin-server
    ports:
      - 8182:8182
  console:
    image: tinkerpop/gremlin-console
    # volumes:
    #   - ./.docker/console/conf/remote.yaml:/opt/gremlin-console/conf/remote.yaml
```

接続。

```
:remote connect tinkerpop.server conf/remote.yaml
```

`:> g.V()`のようにトラバーサルを実行する。

consoleは変数も使える。

```
v1 = V()....
:> V(v1)....
```

のような書き方ができる。

https://qiita.com/chromia/items/b93ef0b3a14eb875e7cc

wssでアクセスする場合、`remote.yaml`の設定に`connectionPool: { enableSsl: true }`を追加する。

`:>`はリモート接続した先にクエリを送る命令。
リモート接続で`:>`を省略したい場合、接続してから`:remote console`を実行する。
