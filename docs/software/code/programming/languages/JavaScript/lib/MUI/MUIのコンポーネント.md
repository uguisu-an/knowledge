## AutoComplete

MUIのAutoCompleteで検索ワードの入力に合わせて動的に選択肢を構築する必要があるなら、次の2点が必要。

1. onInputChangeで検索ワードを拾って、選択肢を更新する。
2. AutoComplete側のfilterを無効にする。filterOptions={(x) => x}

また、普通は件数が多すぎるためにこの設計にしているはずなので、スクロールでページネーションする。
例えば、適当な選択肢を最後に追加して、最後の選択肢だけrenderOptionでWaypointに置き換える。Waypoint.onEnterで最後までスクロールしたイベントを拾って、続きを読み込む。
あるいは、ListboxComponentを無限スクロールに対応したコンポーネントに置き換えたり、refで操作するライブラリを使ってListboxPropsにrefを渡したりする方法も考えられる。
https://zenn.dev/wintyo/articles/9ea8a9baed362d

選択肢をページネーションする場合、フィルターもネットワーク型にしないと、読み込まれていない選択肢を検索できない。

onInputChangeの第三引数reasonが"reset"の時は選択したラベルが入ってきて検索条件と一致するとは限らない。
"reset"の時は更新しないのもあり。

## その他

muiの実験的なコンポーネントが`@mui/lab`リポジトリ。
