[VSCode が重い or 不具合があるときに読む記事 #VSCode - Qiita](https://qiita.com/osorezugoing/items/3a2ab8363cf41a2e245f)

1. Extension Bisect を実行して、拡張機能を検査する
2. `files.watcherExclude` の設定で、監視しなくていいファイルを除外する

拡張機能が問題なかったら、`watcherExclude`の設定で`.git`だけでも除外すると少し軽くなる可能性がある。
