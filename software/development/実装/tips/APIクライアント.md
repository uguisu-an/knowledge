API を叩くところの戻り値は
{ status: "success" | "error", data: T, errors: { [key: string]: string } }
の形でないと扱いづらい。

エラーを throw する形だと細かいエラー受け取れないし。
