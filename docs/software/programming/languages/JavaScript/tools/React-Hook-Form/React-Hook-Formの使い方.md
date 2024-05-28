カスタムバリデーションはvalidateオプションにバリデーション関数を渡す。
データを受け取って、エラーメッセージか真偽値を返せばいい。

MUIと統合する場合は`inputRef={register(...)}`を設定する。

バリデーションしたいだけならreact-hook-formでなくていい。
submitのタイミングで入力値を集めて、バリデーションライブラリに投げるだけでいい。
setValueの動作にも癖があるので微妙。

react-formでElementの配置の際にregisterを書くと、描画するまでsetValueできない。
先にregisterだけしておくか、setValueのタイミングを遅らせる。どちらかというと後者がいいかも。
そもそもsetValueを多用するなら制御されたフォームにした方がいいのかも。
