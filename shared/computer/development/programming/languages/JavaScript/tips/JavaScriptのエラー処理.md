JavaScriptはエラー処理が弱くて、throwするとTypeScriptでもany型かunknown型として扱われる。どちらで扱われるかは`tsconfig.json`の`useUnknownInCatchVariables`設定による。

```
throw new Error("message");
```

一応、TypeScriptなら、`instanceof`や`keyof`、あるいは型ガードで型を処理することもできる。
