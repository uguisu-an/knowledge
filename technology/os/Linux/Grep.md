以下の形が基本。
`-r`でディレクトリ以下のファイルも検索して、カレントディレクトリを対象に単語を検索する。

```sh
grep -r "<word>" .
```

検索で見つかった前後の行も表示したかったら、`-3` のように数字をオプションで渡す。