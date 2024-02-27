window.addEventListener なんかも useEffect で扱うもの。
終了処理の段階で removeEventListener する。

NextJSだとuseEffectはクライアント側でしか実行されないので、windowが確定で使える。
useEffect以外の部分では、`typeof window !== 'undefined'`でガードする。

useEffectを扱うときは配列やオブジェクトに注意する。空配列やオブジェクトと初期化していたりすると同じに見えても違うので何度も実行されることがある。

命令的な書き方をするとどうしてもuseEffectは必要になる。
Hooksに閉じ込めたりしてうまいこと吸収すると宣言的な書き方になる。
