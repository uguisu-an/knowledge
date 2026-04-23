とりあえずHTTPSにするのが基本。
HTTPで配信されているといくらでも改竄できる。

セキュリティ系のヘッダーをHTTPヘッダーに追加することでブラウザの制御を行う。
webサイトに対するさまざまな種類の攻撃を防ぐために設計されている。
https://cybersecurity-jp.com/column/102306

公開後に https://securityheaders.com でURLを入力するとヘッダーを評価してくれる。Aランク以上を目指したい。

## 重要なセキュリティヘッダ

- Content-Security-Policy: 実行できるスクリプトのホワイトリスト
- Strict-Transport-Security: HTTPSを強制する (HSTS)
- X-Frame-Options: クリックジャッキング対策
- X-Content-Type-Options: MIMEタイプスニッフィング対策
- Referrer-Policy: URLに含まれる情報を外部に漏らさない
- Permissions-Policy: 機能の使用制限

CSPは設定が難しく、間違えるとサイトが壊れる。まずは他のヘッダーから設定するといい。
CSPはまず`Content-Security-Policy-Report-Only`で試して、問題がなければ本番のCSPとして有効化する。

HSTS (HTTP Strict Transport Security) はブラウザに対して以降の通信を全てHTTPSにするよう強制する機能。
一時的に設定しただけでも、決められた期間は常にHTTPSで通信するので、試しにつけたりするとアクセスできなくなる。
証明書が切れたりしてもHTTPではアクセスできないのでミスが許されない。
最初のアクセスだけはHTTPでもできる。

https://zenn.dev/famaryllis/articles/e8193ebe5057c7

## セキュリティヘッダの設定例

```
"X-Frame-Options": "DENY"
"X-Content-Type-Options": "nosniff"
"Referrer-Policy": "strict-origin-when-cross-origin"
"Permissions-Policy": "camera=(), microphone=(), geolocation=()"
```

開発中に確認する場合、本番モードで起動して、ブラウザの開発ツールからレスポンスヘッダーを見ると確認できる。

セキュリティヘッダはとりあえず一番厳しいものを基礎にして、必要に応じて緩めるといい。例えばPermissionsPolicyはカメラやマイク、位置情報を使うならその分緩めないといけない。
