## インフラの選択肢

- IaaS: 仮想サーバー (自分で環境を作成する)
  - Amazon EC2
  - Google Compute Engine
  - Azure
  - など
- CaaS: コンテナの実行環境 (自分で環境を作成する)
  - Google Cloud Run
  - AWS ECS/Fargate
  - など
- PaaS: 環境一式
  - Vercel
  - Heroku
  - Render
  - Railway
  - など
- BaaS: 環境の一部をAPIで公開 (いわゆるサーバーレスの一種)
  - Firebase
  - Supabase
  - Neon
  - など
- FaaS: 関数だけを実行 (いわゆるサーバーレスの一種)
  - AWS Lambda
  - など

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
