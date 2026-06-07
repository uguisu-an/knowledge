# PHP から JavaScript にデータを渡す

`json_encode` して埋め込む。

以下の 2 つのパターンがある。

1. JavaScript に直接埋め込む
2. data 属性に埋め込んで JavaScript から参照する

data 属性に埋め込むのがおすすめ。
一般的な HTML エスケープの流れに沿っているし、データを扱う JS ファイルを分けても動くので汎用的。

## Laravel の場合

ちなみに Laravel の場合、CSRF トークンなどフレームワーク側で用意されている値は data 属性に埋め込む方法を取っている。
JavaScript に埋め込む Js::from()も用意されているが、data 属性がいいだろう。

まぁ、そもそも JS は書かずに Livewire とかで扱う手もあるし、SPA なら API を叩けばいい。

## Reference

https://qiita.com/tadsan/items/3215da93ef6335bc1a7a
