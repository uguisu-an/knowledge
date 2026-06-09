# 整理の方針

## 基本原則（README「For developers」より）

- 参照先として位置が変わりにくいよう、構造はできるだけフラットに保つ
- ただしコンテキストは必ず分ける
- `programming/languages/javascript/` や `time/management/` のように一貫した階層なら可
- 関連する情報はできるだけ近くに置く
- Obsidian などのツールに依存せず、フォルダでシンプルに整理する（ツールは補助的に使う程度）

## フォルダの統廃合

- 中身が 0〜1 個のフォルダは作らない。意味の近いフォルダへ寄せる
- 固有名詞（製品・作品など）は概念フォルダと分ける。`apps/`（製品）・`games/`（ゲーム）がその例
- フォルダを追加・統廃合したら [folder-index.md](folder-index.md) も必ず更新する

## 概念ツリーと References

- 概念ツリー（[structure.md](structure.md)）はフォルダ階層と一対一ではない。**親子は
  フォルダのネストでなく README の `## References` で表す**。「A は B の一部」は、フォルダを
  入れ子にせず A の README が B を References して示す。例：`talk` は `conversation` の子だが、
  トップレベルの兄弟フォルダのまま References で親子を表現している。
- `## References` は「親」だけでなく「関連」も混在しうる。方向が一定でなく循環もある
  （`talk`↔`conversation`）。ツリーを読むときは親子（含意）と兄弟（関連）を区別する。
- 整理スキル（`/retree`・`/recat`）の役割分担と使う順番は [reorganization.md](reorganization.md)。

## 公開前提

このリポジトリは公開される前提。実名を含む人物評や個人情報など、公開リスクのある情報は
置かない。判断に迷うものも置かない。
