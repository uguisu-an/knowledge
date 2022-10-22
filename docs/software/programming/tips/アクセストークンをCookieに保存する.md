# アクセストークンを Cookie に保存する

サーバー側では httpOnly + secure + SameSite=strict に設定する。

クライアント側ではサーバーサイドクッキーをセッションに持っておいて、API を叩く際に使用する。
axios なら withCredentials オプション、fetch なら credentials オプションを使う。
