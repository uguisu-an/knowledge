# Git Submodule

他のリポジトリをリポジトリの一部のように取り込める機能。

## モジュールの取得

サブモジュールを持つリポジトリでは、サブモジュールを取り込まないといけない。

`clone`の`--recursive`オプションで一緒に取り込める。

```sh
git clone --recursive {repository_url}
```

すでに`clone`してあるなら、次のコマンドを実行する。

```sh
git submodule init # サブモジュールを使用する設定
git submodule update # 最新のサブモジュールを取得する
```

## モジュールの変更

サブモジュールのURLが変わったら、`.gitmodules`を変更する。

`.gitmodules`を変えたら、`.git/config`に反映しないといけない。
次のコマンドを実行する。

```sh
git submodule sync
```
