## exec

- `-i`: 標準入力をコンテナで受け取る（attachされていなくても標準入力を開いたままにしておく）
- `-t`: 標準出力をexecを実行したTerminalで受け取る（擬似ttyを割り当てる）

## run

よく使うオプション

- `-p {HOST_PORT}:{CONTAINER_PORT}`: ポートを公開する
- `-e {ENV}`: 環境変数を指定する
- `--env-file .env`: 環境変数ファイルを指定する
- `--name {NAME}`: コンテナに名前をつける
- `-v {HOST_PATH}:{CONTAINER_PATH}`: フォルダやファイルをマウントする
- `-d`: バックエンドで起動する
- その他、`exec`のオプション
