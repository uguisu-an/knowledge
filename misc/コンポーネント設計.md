# コンポーネント設計

## Presentational Component と Container Component

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
https://www.yuuniworks.com/blog/2018-05-18-presentational-component%E3%81%A8container-component/

二つに分類するというよりは、見た目だけを制御する、状態を持たないコンポーネントを切り出す考え方。

再描画を減らせるパフォーマンス的な利点と、スタイルや見た目を制御するためのプロパティを切り分けられるメンテナンス的な利点が両方ある。

ただし、React の場合は Hooks が使えるようになったので、シンプルに関数コンポーネントとして扱う意味では分ける意味は弱くなった。
それでも見た目を制御するための情報を切り出す意味ではまだ有用。

同じ見た目でいくつもコンポーネントを作るのでなければ、Presentational コンポーネントは作らなくてもいい。単に一つの凝集されたコンポーネントとしてまとめる。
