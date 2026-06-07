よく使うコマンド

- `docker help`: ヘルプ
- `docker images`: イメージを一覧する
- `docker pull`: レジストリからイメージを取得する
- `docker run`: コンテナを起動する
- `docker exec`: コンテナでコマンドを実行する
- `docker ps`: コンテナを一覧する
- `docker rm`: コンテナを削除する
- `docker cp`: ホストとコンテナの間でファイルをコピーする

Compose系

- `docker compose up`
- `docker compose down`

Amazon ECRからイメージを取得する場合、認証ヘルパーを使うのが簡単。
https://docs.aws.amazon.com/ja_jp/AmazonECR/latest/userguide/registry_auth.html#registry-auth-credential-helper
aws-cliでログインしていればdockerからもアクセスできる。
