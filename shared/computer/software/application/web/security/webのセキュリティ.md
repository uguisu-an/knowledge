とりあえずHTTPSにするのが基本。
HTTPで配信されているといくらでも改竄できる。

セキュリティ系のヘッダーをHTTPヘッダーに追加することでブラウザの制御を行う。
webサイトに対するさまざまな種類の攻撃を防ぐために設計されている。
https://cybersecurity-jp.com/column/102306

公開後に https://securityheaders.com でURLを入力するとヘッダーを評価してくれる。Aランク以上を目指したい。

## 重要なセキュリティヘッダ

- Content-Security-Policy: 実行できるスクリプトのホワイトリスト
- Strict-Transport-Security: HTTPSを強制する
- X-Frame-Options: クリックジャッキング対策
- X-Content-Type-Options: MIMEタイプスニッフィング対策
- Referrer-Policy: URLに含まれる情報を外部に漏らさない
- Permissions-Policy: 機能の使用制限

CSPは設定が難しく、間違えるとサイトが壊れる。まずは他のヘッダーから設定するといい。
CSPはまず`Content-Security-Policy-Report-Only`で試して、問題がなければ本番のCSPとして有効化する。

https://zenn.dev/famaryllis/articles/e8193ebe5057c7

## セキュリティヘッダの設定例

```
"Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
"Strict-Transport-Security": "max-age=31536000; includeSubDomains"
"X-Frame-Options": "DENY"
"X-Content-Type-Options": "nosniff"
"Referrer-Policy": "strict-origin-when-cross-origin"
"Permissions-Policy": "camera=(), microphone=(), geolocation=()"
```
