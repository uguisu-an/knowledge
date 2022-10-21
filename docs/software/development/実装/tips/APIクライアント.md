API を叩くところの戻り値は data だけだと扱いづらい。
以下のように、ステータスとエラーとデータを含む形が使いやすい。
{ status: "success" | "error", data: T, errors: { [key: string]: string } }

エラーを throw する形だと細かいエラー受け取れない。

サーバー側の json は信じて使う。
必要以上にチェックするのは無駄。
テストはサーバー側に任せる。
