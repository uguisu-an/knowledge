通信を中継するツール。

基本的な使い方。

```
socat tcp:example.com:80,fork,reuseaddr
```

ポートを変えたい場合は引数を分ける。

```
socat tcp-listen:8080,fork,reuseaddr tcp-connect:example.com:80
```
