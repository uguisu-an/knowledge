jsでuuidを扱う場合、今はcrypto.generateUUIDを使えばいい。

UIコンポーネントのために生成したidをリストのkeyにするだけならDateで十分。

```js
const key = new Date().toISOString();
```
