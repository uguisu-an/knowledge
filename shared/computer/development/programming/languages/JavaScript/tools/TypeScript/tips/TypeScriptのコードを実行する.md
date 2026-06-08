## コンパイルして実行する

```
npx ts-node greeting.ts
```

## Nodeで直接実行する

```
node greeting.ts
```

NodeJS 23.6.0以降から、TypeScriptのファイルを直接実行できるようになった。
22.15.0でも`--experimental-strip-types`オプションをつけると同じ機能を使える。
ただ、`import`に拡張子が必要、などコンパイルする場合と動きが違うところもあるし、そもそも単に型を除去しているので型のエラーが出ない。
https://zenn.dev/tris/articles/node-typescript
