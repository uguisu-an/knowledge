# Docker Compose

複数のコンテナをまとめて構築できる。

`docker compose`の`-f, --file`オプションを複数渡すと、後に渡した方で部分的に上書きされる。
デフォルトでは、`docker-compose.yaml`と`docker-compose.override.yaml`の2つを読み込むようになっているので、`-f, --file`オプションを指定しなくても`docker-compose.override.yaml`を作るだけで上書きできる。

`docker compose up`しなくても、`docker compose run {service}`で特定のサービスを立ち上げられる。

`docker compose run`でのみ使って、自動で起動する必要がない場合、サービスに`profiles`を設定しておくといい。
`profiles`を設定したサービスは`up`の`--profile`オプションでそのprofileを明示しない限り`up`で起動しない。
https://gotohayato.com/content/505/
