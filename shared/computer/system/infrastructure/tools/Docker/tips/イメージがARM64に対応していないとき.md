イメージがApple Siliconに対応していないと次のようなエラーが出る。
`no matching manifest for linux/arm64/v8 in the manifest list entries`

platformを指定すると回避できる。

composeなら`platform: linux/x86_64`を追加する。
