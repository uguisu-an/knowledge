次のコマンドで現在のremote設定を確認できる。

```sh
git remote -v
```

次のコマンドで接続先を変えて、改めて設定を確認する。

```sh
git remote set-url origin {new-url}
```

念の為、`fetch`が通るかどうか試す。
変更がなければ何も返ってこないが、エラーが返ってこないなら問題ない。

```sh
git fetch
```
