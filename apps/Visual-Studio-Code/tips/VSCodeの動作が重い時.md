## 主な原因

- 開いているプロジェクトが大きい
- 拡張機能が重い
- ファイル監視プロセスが重い
- 型チェックやインテリセンスが重い

特に拡張機能は重い。

## その他

[VSCode が重い or 不具合があるときに読む記事 #VSCode - Qiita](https://qiita.com/osorezugoing/items/3a2ab8363cf41a2e245f)

1. Extension Bisect を実行して、拡張機能を検査する
2. `files.watcherExclude` の設定で、監視しなくていいファイルを除外する

拡張機能が問題なかったら、`watcherExclude`の設定で`.git`だけでも除外すると少し軽くなる可能性がある。

モノレポなど大きなプロジェクトの場合、一つのフォルダだけ開いた方が軽い。

https://qiita.com/nolanlover0527/items/071277263f8851012e6b?utm_source=Qiita+ニュース&utm_campaign=3242bd997c-Qiita_newsletter_695_11_05_2025&utm_medium=email&utm_term=0_e44feaa081-3242bd997c-33849321
