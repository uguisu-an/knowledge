# Widget の切り出し

## Variable

Widget を切り出す前に変数から作るといい。

```dart
Widget text = Text('Hello World');
```

## Extract Widget

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

## StatelessWidget to StatefulWidget

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

## Snippets

公式のスニペットにも Widget を作成するものがある。

`Flutter Stateful Widget` は `stfl` で、
`Flutter Stateless Widget` は `stls` で呼び出すのがおすすめ。

https://docs.flutter.dev/development/tools/vs-code#snippets

組み込みの Widget は自動補完で足りるので要らない。

## Reference

https://codelabs.developers.google.com/codelabs/flutter-codelab-first#0
