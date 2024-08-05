# Widget のテスト

## 環境構築

まずは `flutter_test` を取り込む。

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
```

## Widget の構築と検索

`test` の代わりに `testWidgets` を使う。
引数は `(WidgetTester tester) async => void` になるので、主に `tester` の中のメソッドを使う。

`await tester.pumpWidget(MyWidget(...))` でウィジェットを構築して、
`find.text()` を使って Finder のインスタンスを生成する。

## 検証

検証では各種 Matcher と Finder の比較で状態を確認する。

例えば、 `expect(titleFinder, findsOneWidget)` のように。
他にも `findsNothing`, `findsWidgets`, `findsNWidgets`, `matchesGoldenFile` のような Matcher がある。

Matcher は以下の API リファレンスで `Matcher` を検索して調べられる。

https://api.flutter.dev/flutter/flutter_test/flutter_test-library.html

## Reference

[An introduction to unit testing | Flutter](https://docs.flutter.dev/cookbook/testing/unit/introduction)

[An introduction to widget testing | Flutter](https://docs.flutter.dev/cookbook/testing/widget/introduction)

[Mock dependencies using Mockito | Flutter](https://docs.flutter.dev/cookbook/testing/unit/mocking)
