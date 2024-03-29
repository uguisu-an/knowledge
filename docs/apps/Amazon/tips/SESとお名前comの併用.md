# SES の DKIM 署名をお名前.com で検証する

## SES

`Create identity` からドメイン 1 を追加する。

`Publish DNS records` にある 3 つの CNAME レコードを保存しておく。

## お名前.com

ネームサーバーの設定 > ドメインの DNS 設定 からドメインの一覧を開く。

ドメイン 1 の設定を探して、チェックを入れて緑の「次へ」をクリックする。

「DNS レコード設定を利用する」の横の「設定する」をクリックする。

「追加」の上の入力フォームから保存しておいた 3 つの CNAME レコードを登録する。
ドメイン名の一部が既に含まれているので、その部分は削除して登録する。
（この時点ではまだ反映されていない）

「確認画面へ進む」をクリックする。

変更内容を確認して「設定する」をクリックする。

## 備考

DKIM の設定が反映されているかどうか確認する方法。

https://aws.amazon.com/jp/premiumsupport/knowledge-center/ses-dkim-failing-verification/

ドメインは既に使っているものと被らないようにした方が無難かも。
設定がうまくいってなくてサービスにアクセスできなくなることがある。
