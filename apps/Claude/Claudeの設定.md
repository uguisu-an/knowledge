https://code.claude.com/docs/ja/settings

## 設定のスコープ

- user: 全てのプロジェクトで共通の設定 (`~/.claude`)
- project: 現在のプロジェクトでチームが使う設定 (`./.claude`)
- local: 現在のプロジェクトで自分だけが使う設定 (`./.claude/settings.local.json`)
- session: そのセッションだけ

## その他

- Claude自体の設定ファイル
  - `.claude/settings.json`
  - `~/.claude/settings.json`
  - `~/.claude/settings.local.json`
- ルール
  - `CLAUDE.md`: セッション開始時にコンテキストウィンドウに読み込まれる
  - `.claude/rules/*.md`: 指定したパスを読み込んだ時にコンテキストウィンドウに読み込まれる
- スキル
- サブエージェント

`CLAUDE.md`も設定といえば設定。

現在の権限設定は`/permissions`で確認できる。

`/permissions`で設定した場合は`local`に置かれる。

`CLAUDE.md`に書くべき情報:

- プロジェクトの概要
- 言語やフレームワークの指定
- 避けるべき実装やチーム内の開発ルール

設定変更後はclaudeの再起動が必要。

Claude Codeの設定のスコープにはuser, local, project, sessionがある。ルール、スキル、プラグイン、MCPサーバー、などに影響する。

`settings.json`とHooksだけは強制されるので、最も信頼できる。ルールやスキルはClaudeが無視する場合もある。

path-scoped rulesは必要に応じてそのパスだけで使われるというよりも、そのセッションでそのパスを使った時に読み込まれて以後は維持される。

まず、毎セッション必ず読み込まれる指示は`CLAUDE.md`に置いて、一部の処理にしか影響しない指示はスキルかpath-scoped ruleに置くのが基本。公式でも推奨されている。

`./CLAUDE.md`は`./.claude/CLAUDE.md`に置くこともできる。`/init`の標準は前者。

指示は具体的にする。「テストを実行する」よりも「`npm test`を実行する」の方がいい。

ルールもスキルも多くなるほどコンテキストウィンドウを圧迫する。
ただ、常に読み込まれるルールでなければ作業を小さくすることで対応できる。

確実に読み込まれてほしいルールは`CLAUDE.md`に書くべき。
スキルは見落とす可能性もある。

スキルを使う場合は明示的にスラッシュコマンドで呼び出すのが確実。
`/commit`, `/merge`, `/review`のようなスラッシュコマンドを用意しておく。
ただ、"Stripeの決済機能実装"のようなスキルはプロンプトの中で使ってこそ意味がある。Claudeが使うかどうかを判断しやすいdescriptionを持たせるのが大事。トリガーのスコープを絞る。「Stripeの決済機能」ならトリガーがはっきりしてるけど、「コーディング全般」みたいなスコープになると見落としが多くなる。

フックは`disableStopHook: boolean`や`disableAllHooks: boolean`などを設定すると後から無効にもできる。

フックはagentごとに設定することもできる。agent definitionのhooksで設定する。

`settings.json`に以下を追加すると、バリデーションが効く。

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json"
}
```

最新リリースが含まれていない場合もあるので、バリデーションに失敗しても無効とは限らない。
