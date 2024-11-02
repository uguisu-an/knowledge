# Agent Forwarding

ログインしたサーバーで、ローカルにある鍵を使う。

## ssh-agent

ssh-agent を使うと agent forwarding できる。
サーバーに鍵を置かなくて済むので、より安全に踏み台サーバーを利用できる。

## 常に有効にする

特定のホストで常に有効にするなら、config で `ForwardAgent yes` にする。

## Reference

https://zenn.dev/naoki_mochizuki/articles/ce381be617cd312ffe7f
