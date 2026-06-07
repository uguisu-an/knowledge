# GlobalKey

StatefulWidget の State にアクセスするオブジェクト。

## 使い方

```dart
final _formKey = GlobalKey<FormState>();
@override
Widget build(BuildContext context) {
    return Form(
        key: _formKey,
        // ...
    );
}
```

のように使うと、後から `_formKey.currentState!` で FormState にアクセスできる。

Form の他には Router や Navigator とも組み合わせて使う。
