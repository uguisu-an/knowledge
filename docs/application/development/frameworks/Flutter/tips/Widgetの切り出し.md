# Widget の切り出し

Widget を切り出す前に変数から作るといい。

```dart
Widget text = Text('Hello World');
```

Widget を切り出して StatelessWidget を作る。
VSCode のリファクタリング機能で `Extract Widget` するとクラスとして切り出せる。

```dart
Widget text = MyTextWidget();

class MyTextWidget extends StatelessWidget {
  const MyTextWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text('Hello World');
  }
}
```

必要に応じて StatefulWidget にする。
VSCode のリファクタリング機能で `Convert to StatefulWidget` すると StatelessWidget を StatefulWidget に変換できる。

```dart
Widget text = MyTextWidget();

class MyTextWidget extends StatefulWidget {
  const MyTextWidget({
    super.key,
  });

  @override
  State<MyTextWidget> createState() => _MyTextWidgetState();
}

class _MyTextWidgetState extends State<MyTextWidget> {
  @override
  Widget build(BuildContext context) {
    return Text('Hello World');
  }
}
```

https://codelabs.developers.google.com/codelabs/flutter-codelab-first#0
