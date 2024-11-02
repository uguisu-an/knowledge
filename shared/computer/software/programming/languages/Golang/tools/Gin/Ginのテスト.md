Ginのテストはrouter.ServeHTTPにhttptestのRecorderを渡すと、CodeやBodyを得られる。
`httptest.NewRecorder()`は`http.ResponseWriter`を作る。
`router.ServeHTTP()`が第一引数にResponseWriterを受け取って、レスポンスを書き込む。

```go
func TestExample(t *testing.T) {
  router := setupRouter()

  w := httptest.NewRecorder()
  req, _ := http.NewRequest("GET", "/ping", nil)
  router.ServeHTTP(w, req)

  assert.Equal(t, 200, w.Code)
  assert.Equal(t, "pong", w.Body.String())
}
```

JSONをチェックしたい場合は、次のように書く。
`json.Marshal`を使って構造体からJSONを作って、stringにする。

```go
userJson, _ := json.Marshal(exampleUser)
assert.Equal(t, string(userJson), w.Body.String())
```

https://gin-gonic.com/ja/docs/testing/
