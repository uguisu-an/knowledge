標準出力が接続されているデバイスをttyと呼ぶ。
元々はteletypewriterの略。

複数のTerminalを立ち上げると、それぞれ別々のttyに接続している。

UX系のOSでは`tty`でそのTerminalが使っているデバイスを取得できる。

2つのTerminalを立ち上げて`/dev/ttys001`と`/dev/ttys002`だったとすると、`/dev/ttys001`で`echo 'Hello World' > /dev/ttys002`とすると、`/dev/ttys002`に`Hello World`と表示される。

https://qiita.com/hoge_5555/items/f677f9ec7cd859380426
