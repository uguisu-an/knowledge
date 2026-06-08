`make()` は特定の構造体を適切に初期化する関数。

引数の型に合わせて、以下の関数にコンパイルされる。

1. map => `runtime.makemap`
2. slice => `runtime.makeslice`
3. channel => `runtime.makechan`

似たような関数として `new()` がある。
`new()` は `make()` と違って、メモリだけ確保して値はゼロ（数値なら 0、文字なら ""）になる。

## Reference

- https://cipepser.hatenablog.com/entry/go-new-make
