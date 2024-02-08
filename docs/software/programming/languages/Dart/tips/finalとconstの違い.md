# final と const の違い

final は変数を代入できないようにする。

const は変数の中身に対する操作もできないようにする。

```dart
final list = [1, 2, 3];
list.add(4);
print(list); // => [1, 2, 3, 4]

const list2 = [1, 2, 3];
list2.add(4); // error
print(list2);
```
