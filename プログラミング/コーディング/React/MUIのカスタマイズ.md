# Material UI

初期設定は以下のマニュアルで確認する。

https://mui.com/material-ui/customization/default-theme/

`createTheme()` にオプションを渡して `theme` インスタンスを生成する。

`ThemeProvider` を入れ子して、一部だけにテーマを適用することもできる。

https://zenn.dev/longbridge/articles/c100d0311ed1be

`styled()` で CSS を書き換えることもできる。
ただ、細かいクラスに依存してしまうのでできるだけテーマの方が良さそう。

https://blog.gaji.jp/2022/01/14/8892/
