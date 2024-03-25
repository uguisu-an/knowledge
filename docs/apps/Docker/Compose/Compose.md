# Docker Compose

複数のコンテナをまとめて構築できる。

`docker compose`の`-f, --file`オプションを複数渡すと、後に渡した方で部分的に上書きされる。
デフォルトでは、`docker-compose.yaml`と`docker-compose.override.yaml`の2つを読み込むようになっているので、`-f, --file`オプションを指定しなくても`docker-compose.override.yaml`を作るだけで上書きできる。
