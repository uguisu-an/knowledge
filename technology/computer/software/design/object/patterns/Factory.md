Factory をオブジェクトとして作るほどのものでなければ、Factory Method で十分。

オブジェクトを初期化する処理はそのオブジェクトの本質ではない。
factory を用意して、コンストラクタはシンプルにするのが定石。
factory オブジェクトでも factory メソッドでもいい。