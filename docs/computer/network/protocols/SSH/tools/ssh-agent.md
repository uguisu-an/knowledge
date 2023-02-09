# ssh-agent

Agent Forwarding のためのコマンド群。

## ssh-agent 本体

起動

```sh
eval `ssh-agent`
```

停止

```sh
eval `ssh-agent -k`
```

## ssh-agent で引き継ぐ鍵の登録

一覧

```sh
ssh-add -l
```

登録

```sh
ssh-add {secret_key_path}
```

削除

```sh
ssh-add -d {secret_key_path}
```
