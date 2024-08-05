# API クライアントをモックする

モックサーバーの msw を使う。

https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests

それ以外には、axios や fetch をモックする方法もあるけど、msw の方が低い階層でモックする分「できるだけモックを利用しない」方針に沿っている。
