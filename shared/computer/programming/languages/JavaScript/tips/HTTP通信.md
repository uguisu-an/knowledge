昔は axios を使ってたけど、最近は fetch でいい。

古いブラウザをサポートするだけなら axios でなくポリフィルの whatwg や promise を導入して fetch を使う。

ダウンロード中のプログレスバーを作るのは fetch より axios のほうが簡単。
ただ、ReadableStream を返す形のメソッドを一つ定義しておけば fetch でも使い回せるので、そのためだけに axios を導入するよりは fetch の方がシンプル。

https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
