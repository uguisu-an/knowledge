- 使い方が複雑すぎる
- 呼び出しが多すぎる（小さく分けすぎている）
- 柔軟性に欠けている
- タイムゾーンを考慮していない
- 名前から動作が想像できない
- ステータスコードを使っていない
- エラーコードのルールが一般的な規定と異なる
- 変化するレスポンスをキャッシュしてしまっている
- 同時アクセスで競合が発生する、排他処理が不十分
- 必要以上に遅い、重い
- 互換性を考慮していない

https://cloud.google.com/blog/ja/products/api-management/restful-web-api-design-best-practices/
https://qiita.com/nissy_gp/items/115a81cf830c91a7cd82

逆に、良い設計:

- 冪等性がある
