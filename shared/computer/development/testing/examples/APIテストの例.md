# API CRUD Test Example

## 共通

運営としてログインしている。

## Create

`POST /admin/users` を呼び出す。

パラメータに `email`, `password` を渡す。

→ ステータスコード 201 を返す。

## Read

`GET /admin/users` を呼び出す。

→ ステータスコード 200 を返す。

→ 設定した `email` を持つ項目が一番上に含まれている。

id を保存する。

## Update

`PUT /admin/users/{id}` を呼び出す。

→ ステータスコード 200 を返す。

`GET /admin/users/{id}` を呼び出す。

→ ステータスコード 200 を返す。

→ レスポンスの `email` が一致する。

→ レスポンスの `password` を含まない。

## Delete

`DELETE /admin/users/{id}`

→ ステータスコード 204 を返す。

`GET /admin/users` を呼び出す。

→ ステータスコード 404 を返す。
