データを持って、取得や更新があるところ。

あたかもコレクションのように扱う。

リストと似ている。

get/put とか find/save できることが多い。

例:

```js
interface UserStore {
  get(id: UserId): User;
  getAll(): User[];
  put(user: User): void;
}
```

このインタフェースを UserAPI で実装したり、UserDB で実装したり。
UserStore を使うときは DI とか引数とかに渡してその中から検索する形になる。

```js
function getUserFriends(users: UserStore, userId: UserId, indent: number = 0);
```
