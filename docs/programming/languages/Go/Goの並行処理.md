goroutine を使うと、並行処理が簡単に書ける。

主な命令文:

- `go`
- `make(chan)`
- `close()`

`go` で並行処理を実行する。
明確に `go` をつけない場合は逐次処理になる。

以下の例で `go funcA()` にした場合は A と M が実行の早い順に混ざって出力される。
`funcA()` にした場合、funcA が先に全部実行されるので `AAAAAAAAAAMMMMMMMMMM` になる。

```go
func funcA() {
	for i := 0; i < 10; i++ {
		fmt.Print("A")
		time.Sleep(10 * time.Millisecond)
	}
}

func main() {
	go funcA()
	for i := 0; i < 10; i++ {
		fmt.Print("M")
		time.Sleep(20 * time.Millisecond)
	}
}
```

JavaScript でいう Generater や async/await に近い。
ただ、結果は channel を経由してやりとりするのが特殊なところ。

`channel := make(chan string)` で string のメッセージをやりとりするチャネルを作って、`defer close(channel)` で破棄するのを予約しておく。
`channel <- message` でチャネルにメッセージを送って、`<- channel` でチャネルからメッセージを取り出す。
取り出したメッセージは代入してもいいし、そのまま何かの引数にしてもいいし。

```go
func funcA(chA chan <- string) {
    time.Sleep(3 * time.Second)
    chA <- "Finished"		// チャネルにメッセージを送信する
}

func main() {
    chA := make(chan string)	// チャネルを作成する
    defer close(chA)		// 使い終わったらクローズする
    go funcA(chA)		// チャネルをゴルーチンに渡す
    msg := <- chA		// チャネルからメッセージを受信する
    fmt.Println(msg)
}
```

## Reference

- https://www.tohoho-web.com/ex/golang.html#goroutines
