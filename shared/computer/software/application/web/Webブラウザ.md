Webサイトを閲覧するアプリケーション。
Webサーバーからデータを受け取って、人が読める形でWebページとして表示する。

## Referrer

Referrerとは、ブラウザがページ移動する際に移動前のページの情報を遷移先サーバへ自動送信するHTTPヘッダ情報。
アクセス解析やセキュリティのために利用される。

セキュリティのために、通常外部のサイトに移動する場合はReferrerを送らないこともある。

Referrerに記載される情報:

- オリジン
- パス
- クエリ文字列

ほとんどのブラウザは `Referrer-Policy: strict-origin-when-cross-origin` に設定されていて、別オリジンへのHTTPS→HTTPSリクエストにはオリジンだけを送る。HTTPSからHTTP相手にはReferrerを送らない。
https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy

古いブラウザはReferrer-Policyが緩いこともあるので、明示した方がいい。
