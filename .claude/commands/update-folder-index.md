---
description: shared/ の README を走査して docs/folder-index.md を再生成する
---

# フォルダ索引の再生成

`docs/folder-index.md` を現在のフォルダ構造に合わせて再生成する。
`shared/` を整理してフォルダを追加・統廃合したあとに実行する。

## 手順

1. **README を収集する**。以下のコマンドで README のあるフォルダ一覧と説明を取得する。

   ```bash
   find shared apps games -name "README.md" | sort | while read f; do
     dir=$(dirname "$f")
     desc=$(awk '
       NR==1 { next }
       /^#/ { next }
       /^$/ { next }
       /^-/ { next }
       { print; exit }
     ' "$f")
     echo "$dir|$desc"
   done
   ```

2. **説明が空のフォルダ**はフォルダ名・パスから内容を推測して補う。
   推測が難しければ空欄のまま `—` だけ残す。

3. **`docs/folder-index.md` を現在のファイルの形式に合わせて書き直す**。

   - トップレベルの使い分け・注意点のセクションは既存文言を維持する
   - `apps/`・`games/`・`shared/` の3セクション構成を維持する
   - `apps/` は README の有無に関係なく全フォルダを列挙する
   - `games/` は README のあるフォルダのみ列挙する
   - `shared/` は README のあるすべてのパスをフラットに列挙する（インデントなし）
   - 各行の形式: `- \`パス/\` — 一行説明`

4. **承認なしで `docs/folder-index.md` を上書き保存する**。
   保存前に以下をチェックする:

   - `shared/` の全フォルダ（README あり）が漏れなく含まれているか
   - `apps/` の全フォルダが含まれているか
   - 説明が空のままのエントリがないか（空なら推測で補う）
   - 既存の「トップレベルの使い分け」「注意点」セクションが維持されているか

5. 保存後、変更したエントリ数（追加・削除・説明変更）を簡潔に報告する。
   コミット指示があれば `整理: フォルダ索引を更新` のようなメッセージでコミットする。
