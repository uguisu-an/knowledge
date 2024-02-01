aws-cli を使う。
https://aws.amazon.com/jp/cli/

AWS CLI でシングルサインオンしたいなら、saml2aws を使うのが簡単。
https://github.com/Versent/saml2aws

`saml2aws login` で `unable to locale form submit URL` のエラーが出たら、`saml2aws configure` で設定した URL を間違えている可能性がある。
