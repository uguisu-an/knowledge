1. GitHubにリポジトリを作成する
2. `.claude-plugin/marketplace.json`を定義する

これだけで使用者がマーケットプレイスを追加してプラグインをインストールできる。
GitLab, Bitbucket, セルフホストのサーバーでもフルURLを渡せば設定できる。`your-username/your-repo`のようにリポジトリ指定の場合はGitHubがデフォルト。プライベートリポジトリも使える。

コミュニティマーケットプレイス (anthropics/claude-plugins-community) に提出すれば、レビューを経て掲載される場合もある。

- plugin-name/
  - .claude-plugin/
    - marketplace.json
  - skills/
  - docs/
  - README.md

このような構成が基本だが、

- repo-name/
  - .claude-plugin/
    - marketplace.json
  - plugins/
    - plugin-name/
      - skills/
      - docs/
      - README.md

のように複数のプラグインをリポジトリに持たせることもできる。

個別のスキルやサブエージェントなどの書き方に関しては公式マーケットプレイス (https://github.com/anthropics/claude-plugins-official) を参考にするのが一番。
