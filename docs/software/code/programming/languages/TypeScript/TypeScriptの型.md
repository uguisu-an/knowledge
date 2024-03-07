TypeScriptの型周りでいうと、typeof, keyof, is, in, as, UtilityTypes, MappedTypesあたりが型のところ。

inはJavaScriptにもあるプロパティの存在確認をする機能と、TypeScriptでUnionTypeを元に属性をまとめて定義する機能がある。
tsの方はMapped Typesと呼ばれる使い方の一部。PartialなどのUtilityTypesの内部でよく使われている。
readonlyやoptionalを外すこともできる。
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

https://zenn.dev/oreo2990/articles/249fa60986aad5

never型は関数が終わらないことを示す。Errorで中断するか、ループして終わらない。

any, unknown, void, neverがTypeScript特有の拡張。まずはここから。

特定の数字や文字などに限定する型をリテラル型という。

anyとunknownは型システムの挙動が違う。unknownのプロパティやメソッドは使用するとコンパイルエラーになる。

object型とObjectインタフェースは違う。objectはプリミティブ以外の型を指す。

具体的な型の判別が必要なときはtypeプロパティなどを持たせて、確実に判別できるようにするといい。まぁ、判別しなくていいのが一番。

構造的型付けと名前的型付けがある。インタフェースは構造的型付け。
構造的型付けの言語で名前的型付けを実現する方法もある。TypeScriptではプライベート変数を持たせたり、ブランド型にしたりする。

nullまたはundefinedをまとめて判別したいときだけ、== nullとするといい。それ以外は===を使う。
