まとめてdockerで動かすと簡単に試せる。

- tinkerpop/gremlin-server
- tinkerpop/gremlin-console

composeのvolumesやdocker cpでconf/remote.yamlを設定して、次のコマンドでサーバーに接続する。

```
:remote connect tinkerpop.server conf/remote.yaml
```

consoleは変数も使える。

```
v1 = V()....
V(v1)....
```

のような書き方ができる。
