buttonをスタイリングする場合、以下のように邪魔になりやすいプロパティを初期化することが多い。
UIコンポーネントフレームワークなどは初めから初期化されている。

```
button {
  background-color: transparent;
  border: none;
  cursor: pointer; /* マウスオーバー時に指マークにする */
  outline: none;
  padding: 0;
  appearance: none; /* iOSなどのデフォルトスタイルを無効化 */
}
```
