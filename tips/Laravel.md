認可は、認証・認可コンテキストに任せる。
（Laravel でいえば Guard や Gate/Policy）

例えば、以下のようなアクションになる。

```
$this->middleware('auth:api');
$this->authorize('create', Project::class);
$this->usecase->createProject(auth()->id(), ...);
```

バリデーションはフレームワーク側でテストされているので、テストする優先度は低い。
自分で作った複雑なバリデーションは Rule に切り出して、個別にテストする。
