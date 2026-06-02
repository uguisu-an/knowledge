## 配信のレベル

大きく分けて4つのレベルがある。

1. コンテンツのみ (CMS, Wix, など)
2. フロントエンドのみ (Vercel, Netlify, GitHub Pages, など)
3. 小規模 (Render, Heroku, など)
4. 大規模 (AWS, GCP, など)

データベースを持ったWebサービスを公開するならまずはRenderがおすすめ。
Herokuと似た感じで安いし、プロトタイプなら無料プランでもいい。本番運用ならどちらも25ドルから。

WordPressならXServerとか。

本格的に規模を大きくするならAWSやGCPにする。

## 注意するところ

- セキュリティ
  - 認証
  - 脆弱性
- SEO対策
  - メタデータ
  - クローラー制御（sitemap, robots）
- パフォーマンス
