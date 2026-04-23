## Tier 1

- エラーハンドリングのためのページを作る
  - `app/not-found.tsx`
  - `app/error.tsx`
  - `app/global-error.tsx`: `layout.tsx`でエラーが出そうな時だけでいい
- パフォーマンスを向上させる (基礎)
  - 画像には`next/image`を使う
  - フォントには`next/font`を使う
- セキュリティを向上させる
  - `next.config.ts`にセキュリティのためのHTTPヘッダーを設定する
    - `X-Frame-Options`: `DENY`
    - `X-Content-Type-Options`: `nosniff`
    - `Referrer-Policy`: `strict-origin-when-cross-origin`
    - `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
  - クライアントに公開する必要がない環境変数は`NEXT_PUBLIC_`接頭辞をつけない

## Tier 2

- Server Componentsで処理できる部分はできるだけServer側で処理してクライアントバンドルを減らす
- `<metadata>`の設定、特にtitle, description, OGP (外部向けの場合)
- SEO対策 (一般向けの場合)
  - `app/sitemap.ts`
  - `app/robots.ts`

## Tier 3

- 監視・ログ系を有効にする
  - Sentry, OpenTelemetry, などを導入する
  - Vercel Analyticsを有効にする
- 重いライブラリは`dynamic()`で遅延インポートする

## メモ

sitemapを作る方法は静的な`sitemap.xml`を直接置く方法と、`sitemap.ts`で生成する方法がある。
