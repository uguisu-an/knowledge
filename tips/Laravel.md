認可は、認証・認可コンテキストに任せる。
（LaravelでいえばGuardやGate/Policy）

例えば、以下のようなアクションになる。

```
$this->middleware('auth:api');
$this->authorize('create', Project::class);
$this->usecase->createProject(auth()->id(), ...);
```

バリデーションはフレームワーク側でテストされているので、テストする優先度は低い。
自分で作った複雑なバリデーションはRuleに切り出して、個別にテストする。
