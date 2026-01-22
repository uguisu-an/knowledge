Neptuneでサポートされていない操作。
https://docs.aws.amazon.com/ja_jp/neptune/latest/userguide/gremlin-step-support.html#gremlin-steps-never
https://docs.aws.amazon.com/ja_jp/neptune/latest/userguide/gremlin-step-support.html

Amazon Neptuneにはwssでアクセスする。

socatで踏み台サーバーを建てる場合、次のようにtcp4で繋いで、wssでアクセスする。
`socat tcp4-listen:8182,fork,reuseaddr tcp4:xxx.amazon.com:8182`
