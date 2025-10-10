# Gateway

ゲートウェイは API と完全に同じではない。
あくまでもこちらのアプリケーションから見て必要な情報を扱うものになる。

Gateway から、サービスごとの Client SDK を用いてデータソースにアクセスすることが多い。
SDK がない場合は自前で Client の層を作るのもよし。

Repository も Gateway の一種として実装される。

Cache 前提で単体を取得する Gateway を持っとくと扱いやすいかも。
丸ごとのデータを受け渡すのではなくて、id だけ渡して Cache から取り出す。

Gateway モデル名の重複をなくしたい。

slice は features、api は gateways に整理したい。

一つの機能で使う Gateway の数はできるだけ絞りたい。機能を分離したり、Gateway をうまいことまとめたりして減らす。

ゼータみたいにいくつも API を叩く機能はテストがめんどいけど、ハッピーパスだけは Gateway だけのモックで上から全部通したい。大きなテストがないと不便。
その上で、細かいところは各クラスのテストで確かめればいい。クラスが要らなくなったらテストごと捨てることもある。

Client は Response で扱うか、そのサービスの特殊なレスポンスを用意する。
Gateway で内部のモデルに変換する。

Shopify の場合、Gateway や Repository では save(shopId, product) みたいに作るけど、Client では shopId を Client が持って、productRetrieve(productId) にする。こういうときは ClientFactory.create(shopId) を挟んで、Gateway や Repository では ClientFactory を DI するとうまく実装できる。

キャッシュで無理やり高速化するの限界があるし、汚いけど、Gateway に閉じ込めるとまだ少しマシな方か。でも保存するとこはどうしても見せないといけない。

データのキャッシュは Gateway で。

実装が難しくても、Gateway は分けて手動でテストしつつ、大きなテストをちまちま作っていくとうまくいく。

Gateway で BrandName から BrandId を取ってくる場合、どこでキャッシュするか。それぞれ別々にキャッシュすると面倒な気がする。とはいえ、クライアントで制御するのも変だし、そもそも共通化したらいけないのかも。

統合テストを先に書くと、Gateways をどのくらいの単位で分けるのか決めやすい。

Commands や Controllers から一気に正常系のテスト通すのよさそう。Gateways だけ置き換える。

アプリケーションサービスで Repository や Gateway を操作する部分と、引数として与える部分をどうやって分けるか。

外部サービスは Gateways にまとめて、アプリケーションサービスから呼び出す。実装はアダプターの層で行う。

Gateways にするメソッドが多すぎると置き換えるのが大変。

できるだけ共通化した Gateways を、用途に応じて、最低限の数で作る。

Client をモックして Gateways をテストすると、クライアントからどういう値が返ってくる想定になっているか明示できる。

SDK があって、Client が十分にテストされていて、型が定義されているなら、Gateways のテストは省略して静的解析に任せるだけでもいい。

Gateways も Client をモックにしてテストする。

API クライアントは response を array にして、data の抽出まではしない方が gateway で扱いやすいかも。特にページネーションとかある場合。

throws もインタフェースの一種なので、Gateways の定義側に例外を置いた方がいいのかも。

TranslateText 周りはアプリケーションサービスよりも前に処理するか、アプリケーションサービスの中で独自に Gateway 用意して、ドメインモデルの前に処理した方がいいか。
こういうピンポイントで外部サービスにアクセスして、ドメインモデルには関係ないパターンもアプリケーションサービスで扱って良さそう。

外部サービスに接続する Client や Gateway も使い回しが効く。
ただ、Client は完全に作り切らないで使っていることが多いとか、マイナーな API なら使うこと少ないし、メジャーな API なら初めから SDK があるのでそっちを使えばいい。

Gateways 自体も Client をモックにしてテストした方がいい。

Client は通信のための最低限の実装、Gateways はテストのために切り離しやすい単位のインタフェースにする。

外部サービスは切り離しやすい接点を Gateways にして、通信の本体を Client にまとめる。

Gateways とか多いとどうしてもカバレッジが下がりがち。

Gateway で複数の API にアクセスして、使いやすい単位にまとめるのはなかなかいい。接点を減らせばそれだけ依存関係の解決も簡単になる。テストしやすい。

Laravel なら Client を置き換えるのが手っ取り早いかも。
ただ、Client をそのまま使うよりは、Gateway を中間層として置いた方が変換とか便利。Gateway も Client を置き換えればテストできる。
あと、shopId みたいに Client の accessToken が違うパターンも Gateway で吸収できる。

CollectionByNameGateway があれば、アプリケーションサービスから叩いてもいいけど、できるだけこういうのはコントローラーで処理したほうが綺麗だし、サービスを小さくできる。

CollectionByNameGateway みたいなのをアプリケーションサービスから叩くのもなくはないけど、これはアプリケーション層にインタフェースを置くことになる。これもありなのかな。

Gateways も Client をモックにしたらさらに書けるんだけど、どこまで書いたらいいかなぁ。

Repository よりも Gateway で素直に扱った方がいい気もする。

ProductTagsGateway と ProductUpdateTagsGateway はよくできてると思う。

DB から取ってきたデータを使って Factory でオブジェクトを構築したいなら、Repository も使った方がいいかも。あくまでもデータベースアクセスするのは Repository や Gateway の仕事で、Factory の仕事は構築だけ。

API クライアントはシンプルに、API をそのまま扱う形がいい。Gateway で細かいところを吸収するか、別のメソッドを用意して拡張する。

Shopify の API を叩きたいだけの部分は、Shopify/Application/UseCases/MerchantCreateProductUseCase として扱うより、Main/Application/Gateways/ProductCreateGateway としておいて、Main/Application/UseCases/MerchantImportProductUseCase から呼び出した方がいいかな。

GraphQL は SDK とか使わずに、GraphQL でガリガリ書いていくのが使いやすいのかも。
必要に応じて自分で Gateway とか Client とか作ればそれでいい。

Repository の実装に Gateway を使うのはどうだろうか。
その場合、Gateway はアプリケーション層というよりもインフラ層で完結する形になるから、単に Repository をモックにせずに Gateway をモックにしたいというだけの目的になるか。

Gateways は置くとこが微妙なんだよな。
アプリケーション層に置いてもいいと思うけど、そもそも Laravel とかに任せるなら直接実装してしまってもいい気もする。

テストで切り出した関数はどれくらいまとめたらいいかな。
モックとかは関数にまとめにくい気がしてるけど、Gateway 一つに関数一つなら切り出してもいいかも。

Gateways は一つのインタフェースに一つのメソッドを徹底した方がいいかも。あるいはスタブにする時にワンセットで扱うなら別に構わないか？

SDK がある場合でも組み込み型の入出力の Gateways を用意しておくことで置き換えやすくなる。

通信のテストは Http::fake()もありかも。
ただ、Gateways 自体はどういうサービスのどういうリソースにアクセスするのか明確になるので作って損はない。

Laravel なら手間のかかるドメインモデルを用意するよりは、Gateways, Services, UseCases だけ分けて、ガリガリ書いた方がいいかも。
外部サービスだけは Gateways に分けたいけど、リポジトリは Services から Models を直接呼び出してしまっていい。
Gateways と UseCases は入出力をリテラルにして、Services は Models もありにしようか。

Gateway は外部サービスのアプリケーションサービスに近い。
入出力もリテラルにするといい。

存在確認して create または update するのは Repository に任せてしまってもいいかも。
Gateway の場合も UpdateOrCreateXxxGateway みたいにするとか。

UseCases と Services と Gateways にざっくり分けて、できるだけ Services に移す方法なかなか良さそう。逆に今の src/が足手まといになってきた。

Gateways の役割はアプリケーションサービスに近い。
外部のアプリケーションサービスを叩くイメージで、入出力もリテラルがいい。

funtre みたいに query の機能が足りなくて findOrCreate しにくい場合、Gateway を重くして save を持たせるパターンもある。
これはどちらかというと、{name, categoryName}を id のように扱っているのと同じ。{name,categoryName}で find/save する Repository にすればいいけど、実装的には Repository の save で list を取得して、手元で検索かけて、create と update を分ける。

Laravel だったら Gateway のインタフェースいちいち用意しなくても別にいいか。
Services から Gateways を直接見て、モックにすればいいし。

Repository も Gateways の一種である。

Gateways のテストはシステムテストにする。
実際にモックサーバーなり検証サーバーなりに接続してテストを実行する。手動でもいい。

Http ファサードは DI で受け取れないし、実行するなら Gateways の実装の中でベタ書きでいい。まぁ、そもそもファサード自体が DI みたいなものだし。

テストの基本はコントローラーかサービス単位で、Gateways はモックにする。

Gateways は tinker で実際にアクセスして試すのがいいかも。
或いはシステムテストを分けて、実際にアクセスして試すテストを書いてもいいか。

モックは Gateways だけにして、Services はモックにしない。
サービスやコントローラーのテストでも全ての前提条件を書く。

Laravel の Http ファサードを fake にしてもリクエストしかテストできない。
どういうレスポンスが返ってきて、内部でどういう型にして、といった部分はまた別のところでやらないといけないかも。
そうなると、Stub にするときは初めから Gateway 単位でいいか。Http::fake()を使うのは Gateway 自体のリクエストを確かめるとき。Query Parameters とか。

とりあえず Gateways を置き換えて、外部サービスをテストできればそれでいいか。
Repository みたいにするのか、一つ一つ外部サービスのユースケースごとに Gateway とするのかは都度考えればいいけど。

機能テストの方針

- Laravel ではアーキテクチャを凝りすぎない
- 機能テストでは Gateways をスタブにする
- 外部サービスは Gateways を挟む
- 内部サービスはモックしない
- 複数のサービスを扱うアクションでは各サービスのアサーションを省略する
- アクションでアサーションを省略したサービスは個別にテストする

アプリケーションやドメインモデルとしては Gateways を意識しなくてもいいと思う。
基本的には Repository でいい。ただ、直接別のコンテキストをアプリケーションから操作する場合は Gateways を挟む感じ。Repository で済むなら Repository でいい。

機能テストでモックにするのは Gateways で、Gateways 本体の動作確認は手動のシステムテストでもいい。

SDK があってもなくても Gateways は用意する。

Gateways や Services は簡単な分け方なので維持したいけど・・
SDK とか外部の API を扱いつつ、テストするパターンがあんま見えてない。
単にテストを省略するだけなら Stub でいいんだけど。

Http::fake()を使ってテストする場合、Gateway の先までテストすることになるのでどっちみち機能レベルになる。
ただ、Gateway なしで何度も同じ Http::fake()を書くのも面倒か？いや、そもそも Http::fake()だけで Gateway の先は全部送らなくなるから、Gateway は Gateway で個別に送信テストするとか。

QueryGateway とか Application 層に持った方がいい。
Repository とは分ける。Repository はあくまでも更新用なので。

メールの送信とかは Command パターンというよりも単なる Service として、Gateway から外に投げればいい。

外部サービスに依存する場合、Gateway などの層を置いて、他のサービスにも切り替えられるようにしないとテストもしづらいし、サービス自体が廃止されたときに困る。

Gateway はできるだけ型つけて、UseCase で array から Gateway に渡す複雑な型に変換するといい。

Gateways はサービスごとにフォルダを区切って、どういうサービスのどういう機能を使っているか一目でわかるようにしたい。

Gateways がまとまっていると依存しているサービスが一目でわかる。

インタフェースをきっちり用意するかどうかはともかく、Gateways が一ヶ所にまとまっているのはわかりやすい。

Gateway の層は SDK 以外の Fake にも置き換えられる。
一覧の場合は QueryService と QueryGateway で扱ってみる？どっちみちインタフェースの層を置くためには QueryGateway が必要。QueryGateway の時点では単に array で扱う？それとも SDK の型があればそれで？

やっぱり SDK があっても Gateway の層は用意するべきか。

SDK は直接 Gateway であるべき？
Gateway の扱いは UseCase で規定する？
でも、それだと UseCase がインフラに依存することもありうる。

LINE の SDK だと Response が返ってくる。
SDK で Response を取得 →Gateway で入出力を扱いやすい形に整形 →Service から Gateway を呼び出し、の流れにしてる。

通信をテストするときは Http::fake()を使えばいい。
Facade は Feature でないと動かないので、Gateway のテストとして実装するかな。

QueryService の場合、インフラへのアクセスを Gateway に任せて、QueryService は QueryModel への変換が重要。
ただ、そもそも Gateway から QueryModel を取ってくるのはどうなんだろう？

QueryService であっても、Gateway は挟んだ方がいいと思う。

外部サービスを叩くだけの Gateway はやっぱり UseCase に近い気がする。
いっそ UseCase で実装しといて、内部的には SDK 使って、UseCase を置き換えられるとか、外で実装するとかした方が綺麗かも。

Gateway や Repository になっていると一番いいけど、とりあえず `app/Services` だけ切り出すのもありかな。

UseCase をモックするよりも、できるだけ Gateway をモックしたいところ。
ただ、めんどくさがって UseCase 丸ごとモックすることもある。
UseCase をモックした場合、UseCase もそれはそれでテストした方がいい。

laravel の`app/`からはドメインの Gateways が直接見えないようにして、UseCase を介して扱った方がいい。応用しやすい。

Gateways の層は必ず作る。

Gateways の層があると、そのアプリケーションではどのサービスを使っているか分かり易い。
SDK を Laravel でモックできるとしても、どのエンドポイントを使っているか一目でわかる利点がある。

テストで Gateway の Fake を使うのは避ける。
余計な依存関係ができてしまう。

Gateways や三層コンポーネントの設計方針なんかもチームが慣れるまでは README に書いといた方がいいかも。合意を得てなければ自分の作り方でしかないから。

UseCase をテストするときは、Gateways をモックして、あとは仕様通りにテストする。

Gateways の層は UseCase のテストの時にモックするので、安定してないといけない。
その下は SDK を作ったり、フェイクしたり、自由に書き換えられるけど、Gateways は外部に接続するテストが必要なのでシステムテストも欲しい。

Gateway を用意する場合、Gateway のためのドメインモデルも必要。
Response でやり取りするだけの簡単な SDK を用意して、そっちの UseCase を置き換えるのもありか？

Laravel としては Gateway がなくても UseCase を置き換えられるけど、手動のテストまで考えると Gateway で Fake に置き換えられる方が楽だと思う。

Gateways ではドメインモデルでやりとりした方がいい。
SDK は Response でもいいし、独自のドメインモデルを持つこともある。

外部サービスの API を自前で用意する場合、

- src/Crm/Client.php
- src/Crm/Models/Response.php
- src/Marketing/Application/Services/UserCreateCustomerUseCase.php
- src/Marketing/Domain/Models/Customer.php
- src/Marketing/Domain/Models/CustomerRepository.php

みたいになるかな。
`src/Crm`以下に SDK を用意して、Gateways の実装からそれを使う。

Gateway はアプリケーションのために特化したもので、SDK や ORM は一般的なところを抑える。

SDK や ORM は Gateway そのものではない。
Gateway の中で SDK や ORM などを使って実装する。

Gateway とは別に、独自の SDK を用意するのはありかも。

ゲートウェイのモックはサービスごとに trait にして、mockXxxGateway()みたいにする。

外部サービスとのアダプタを `app/Gateways` にまとめと、どういうサービスを使っているのか一目でわかるのがいい。

UseCase は処理の本体なので、単体テストよりも機能テストの方がいいかな？
まぁ、単体テストの場合は Gateway に渡された集約をチェックするので、そっちの方が仕様のテストとしてはいいのかも。単体テストになるようにしてみる？

UseCase のテストは Gateway をモックにしたら単体でも実施できるはず。
ただ、そのためにはデータベース操作なんかを Gateway にしておく必要がある。
`app/Services` 側はそのまま機能テストでいいとして、`src/Xxx/Application/Services` 側は単体テストにするのがいいか？

機能テストで大事なのはデータベースとプレゼンテーションへの出力だけど、プレゼンテーションは表示項目とかざっくり確かめるくらいだし、ほとんどはデータベースかな。
あとは外部サービスへの出力も Gateway をモックして確かめるといいか。リクエストそのものじゃなくて、Gateway の引数を確かめる。

Gateway は、UseCase を挟んで、Controller から直接見ないようにしたい。

phpunit の実行時に `--exclude-group` オプションで一部のテストを除外することはできる。
gateway のテストとかこれ使って実行しないようにする？
或いは、もう gateway とかは dusk とかのシステムテストに任せるべきか。

FunTre のコンテキストは今のところ Marketing と Settings だけでよかったかも。
外部サービスはコンテキスト分ける必要なくて、単に Gateway にすればいい。

line の getAllFollowerIds()のように、一部のアカウントでしか試せないものは Fake に置き換えてとりあえず使えるようにしておく。
そのためにも Gateway は挟んだ方がよくて、今回の場合は Get だから QueryService を置き換えてもいいかも。まぁ、基本的には Gateway を置き換える。

Gateways はテストしやすいようにログを残しておくべきか？

Gateways が想定通りに動作するのを簡単に確かめたい。

Bulk 系の UseCase でまとめて取得する Gateway を使うこともあるかも。
ただ、Bulk 系は UseCase じゃなくて Controller で制御した方が二重管理にならなくていいか。

QueryService の Gateway は、アプリケーション層に特別なものを用意してもいいかも。

Repository のようにドメインレベルで使う Gateway はドメイン層に、それ以外はアプリケーション層に置いていい。

Gateways は UseCase から使われるものなので、UseCase 単位でない方がいいかも。

Gateways を連想配列で妥協しているところが扱いづらい。どの値が入ってるかわかりづらいし。

Gateway の create の戻り値は完全な状態よりも id だけ返す形がいいかも。
それか、void にして、オブジェクトを引数にして、id をセットする。
API によっては完全な形で返ってこないこともあるし。

外部サービスを叩くところは UseCase よりも Gateway をきっちり内部向けのトランザクションで扱う方がいいかも。

API は一つのファイルに全部まとめちゃってもいいかも。
Gateway としては分けておいて、全てを取り込む？
いや、そこも微妙なとこかな？Repository でない API なら一つのファイルにして、UseCase で分けるだけでもいいかも。
今回は外部サービスを叩くところに UseCase を用意していないのと、Repository として扱ってないところが多いのでごちゃっとしてる。

まずは `app/Services` と `app/Gateways` を作っていくところから始めよう。
特に外部サービスは Gateways 必須で、内部もできるだけ Gateways を用意するとトランザクションの区切りが明確になる。

Laravel でレイヤー分けるならこんな感じ。
あとは `app/Controllers` から切り出した `app/Services` とかあってもいい。

app/Gateways/

- EloquentArticleRepository

src/Blog/Application/Services/

- UserPostArticleUseCase
- UserEditArticleUseCase

src/Blog/Domain/Models/

- Article
- ArticleId
- ArticleRepository (interface)

CampaignRetrieveCustomerUseCase の場合、その中で使う CustomerGateway や CustomerTagListGateway は同じコンテキストであるべき。
専用の CustomerGateway を、CRM の通常ルートとは別に作ることも考えられる。その場合もコンテキストは同じ。

Laravel なら UseCase は Model も絡めてテストする。
外部サービスを扱う部分は Gateway を用意してして、モックする。

外部サービスにアクセスするときは、専用の UseCase と API に合わせた Gateway をそれぞれ Application 層に用意するのが良さそう。
場合によっては API アクセスも Repository の形にして、Domain 層に置いてもいいかも。

外部サービスごとにコンテキストを分けても、Service に直接 Gateway を置くのは違う気がする。
Service はあくまでも UseCase を置いて、API としての部分を Gateway にする。

Gateway のコンテキスト分けるのもなんか違う気がする。

Gateway の先の仕様が変わるときはこの手順がいいかな。

1. GatewayFake を修正する
2. GatewayFake に切り替える
3. 内部の実装を進める
4. 本来の Gateway を修正する
5. 本来の Gateway に切り替える

API の仕様が決まるまでは GatewayFake で実装を進めるといい。

Gateway や Repository からさらに SDK や ORM を使って実装する。

メールのとこは CampaignSendMailUseCase.send(campaignId, contactId, customerData) みたいにして、内部で CampaignRepository とか CampaignVariableRepository とかを叩くようなイメージがいいかも。
顧客情報は別のコンテキストなので、外から丸ごと渡した上で、埋め込みように整形する。
メールの送信も Gateway になるかも。ただ、そこまでする場合はもう Laravel の app/Services でまとめてやっちゃう方が楽か？一応、UseCase があると単体は楽になるけど。

外部設計で考えるアダプタは Controller と Gateway があればいいかな。Presenter は形式を決めるくらいでいいか。HTML なのか JSON なのか、あるいは PDF や CSV の出力があるのか。それはストーリーとしても分けた方がいいし。

Controller はサービスに対する入力を、Gateway は外部サービスの操作を規定する。

Controller や Gateway は外部設計の時点で作ってしまうといいかも。

Query では、QueryService から Gateway のインタフェースにアクセスして、QueryModel を直通で返すのがいいと思う。

ドメインとアプリケーションは以下のような構成が良さそう。

- Domain/
  - Models/ ... Entity や Repository など
- Application/
  - Models/ ... Command や Transformer など
  - Services/ ... UseCase や ApplicationService など
- Query/
  - Models/
  - Services/
  - Gateways/ ... QueryService から呼び出すアダプタ

クエリサービスでデータを取得する部分は Gateway などに委譲する。

処理を API に持って Client を切り離す利点として、API Gateway のようにサービスを隠蔽する層を置ける点が考えられる。

Web アプリのフレームワークは、クリーンアーキテクチャでいう External interface adaptors = Controllers + Presenters + Gateways を書くためにある。
Laravel で言うと、
Controllers = Controllers や Commands、Requests、Routes、など
Presenters = Controllers や Responses、View を呼び出す関数、など
Gateways = Models
また、External interface としての HTML や SQL を内部で扱ってくれるのでそちらも書きやすくなっている。

他のサービスの API の中継だけでも、ゲートウェイがないとコントローラーでベタ書きすることになるので、基本的にはあった方がいい。

例えば、Event の一覧を取ってくる API の中継を Laravel でやるなら・・

- app/
  - Gateways/
    - EventApi.php
- src/
  - XxxContext
    - Application/
      - Gateways/
        - EventQueryGateway.php
      - Query/
        - Models/
          - Event.php
        - Services/
          - EventQueryService.php

一覧の Gateway は、XxxListGateway が好み。
XxxRetrieveGateway, XxxCreateGateway, のように動詞を後にする方がわかりやすいかも。
ただ、ListXxxsGateway の形も捨てがたい。この場合、リソースごとにフォルダ切った方が良いかも。

認証してアクセストークンを持つのは Client でいいけど、FUNTRE の groupId みたいなのは Client というよりも API 自体の制限という感じ。
根本的にアクセス先が一つではないので、Gateway を DI するのが無理あるかも。どのグループの顧客か判断したいので、メソッドに渡すのが妥協点か。

Gateway を抽象化するなら、やっぱり引数に渡した client を直接いじる方法だけど、暗黙的すぎてそれはそれでわかりづらい。

クライアントはシングルトンじゃなくして、gateway.client.setGroup()するのは？
gateway をアップキャストしないといけないから意味ないか。それなら初めから DI なしで扱えばいい。

アクセストークンやユーザーを Gateway のメソッドに直接渡すと、API 以外の実装では必要ない引数になってしまう。
なので、API の実装で auth(User $user): XxxApi のように特別なメソッドを定義して、API だけで使う変数を設定した方がいい。コンストラクタにオプションで渡せてもいい。

Gateways を明示的に作っておけば、どういうサービスに依存しているかはコードを見ればわかる。

AddTagGateway, RemoveTagGateway, ... のようにインタフェースとしては分けつつ、API としては TagApi として統合してもいい気がしてる。

Gateways も外部設計の段階で明らかにしておきたい。
こちらの UI や API だけじゃなくて、こちらから外部の API を叩くパターンね。

クリーンアーキテクチャのモデルだと Gateways はアダプターの層にあるけど、レイヤードアーキテクチャとして実装するなら Application 層にインタフェースを置いて、Infrastructure 層に実装を置くことになるだろう。

SDK があっても Gateways を用意すると、そのアプリケーションでどの API を使っているか一目でわかる。

Application では Service を公開して、Gateway は表に出さない。

Gateway のレスポンスは置き換えやすいオブジェクトになってると Mock にしやすい。

Gateways は SDK などをラップして、アプリケーションに特化した窓口を用意するためにある。

アプリケーション層に Gateways を置くのはいいと思う。
ただ、コンテキストをどこにするかは微妙なところだけど。
いっそパッケージごと分けてしまってもいいのかも。

Gateway をユースケース単位で作るのは、API ごとに入出力のモデルが違う場合もあるため。
また、細かく分けた方がテストなどで置き換えやすい利点もある。

Controller は内向き、Presenter は外向きの一方通行で、Gateway は相互に通信する。
また、Controller は Application を呼び出すのに対し、Gateway は Application 側から外部にアクセスするためのものだ。

環境に依存する情報にアクセスする機能も Gateway として考える。

Store に対する Gateway があれば、mutations はいらないかも。

API からデータを取ってきて、Store に置くようなときはアプリケーションの都合なので、保存だけドメイン層の Repository を使って、API から取ってくる部分はアプリケーション層で Gateway として定義したほうがわかりやすいかも。

Controller, Presenter, Gateway は Interface Adapters で、レイヤードアーキテクチャだとプレゼンテーションやインフラの層に置く。

Vue のプロジェクトフォルダなら { views, components, models, usecases, gateways } みたいな感じでいいかな。

ActiveRecord を採用するなら、Gateways や Application Services は Models を直接扱っても良さそう。
その上で、複雑なドメインだけを切り離して細かいテストを素早く回せるようにすると便利かも。

Gateway とは別に、API Client を用意するのもありか。

Gateways を分けるのは「外部サービスに何を使っているか」をコードで明示する意味もある。

Controllers はルートから呼び出すだけなので invokable でも問題ない。
しかし、DI する Services や Gateways は `($this->service)()` みたいな書き方になってしまうので、普通の関数を定義した方が読みやすい。

Gateway はインタフェースとして扱うので、API をそのまま叩くよりはアプリケーションに合わせて「動画を変換する」とか一つの機能単位で Service のようにまとめるといい。
それがそのまま API と一致することもあれば、こちらで多少作業することもある。あるいはこちらでの作業はアプリケーションサービス側に書くこともある。

外部サービスを使っているところは、Gateways の下に、その名前でまとめるとどのサービスを使っているかわかりやすい。

Gateways の戻りに Model を返すのは密だけど、Laravel ならなくはない。

Square の実装で Gateway の作り方は慣れてきた。
SDK があったらそれ使うだけで簡単だな。API を直に叩いてもべつにいいかも。

App 直下の Gateway は Model を直接返してもいいかも。
ちょっと接続が密だけど、その分簡単に扱える。
ちゃんとやりたい場合はコンテキスト区切ってやればいいし。
Model と一致しないとか、バリデーションが必要なときだけ適当な ValueObject を用意すればいいだろう。

Laravel から外部サービスを扱う場合はそれぞれに Service Provider を用意して、Gateway や config を取り込む。

Gateways は外部サービスをインフラに取り込む部分。
SDK はともかく、なんらかのインタフェースはドメインやアプリケーションの層で定義するべきか。

Gateway の内部では SDK を使う。
ただし、SDK がない場合は、SDK を作るか API をそのまま使うかするしかない。
SDK 自体は FacadeCSS は。

Gateway で接続先との通信が失敗した時は単に例外として扱う。
専用の例外を定義して、あとはアプリケーション側で拾えば良い。

SDK がある時は "Gateways" だけでもいいけど、なかったらコンテキスト丸ごと実装する必要がありそう。

Laravel で DDD を活かすためのファイル構成案

App/{Context}/Domain/Models ドメインルール、リポジトリの定義
App/{Context}/Application/Services (or UseCases) ユースケース
App/{Context}/Application/Gateways ゲートウェイの定義
App/{Context}/Presentation/Models プレゼンテーションモデル
App/{Context}/Infrastructure/Gateways ゲートウェイの実装
App/{Context}/Infrastructure/Repositories リポジトリの実装

アプリケーションレベルのオブジェクトは 1 クラス 1 メソッドで 1 つの目的に特化させることが多い。
逆に、ドメインレベルのオブジェクトはある程度処理をまとめる。あんまり分かれているとそれはそれで扱いづらい。ただ、Gateway や Repository などのインタフェース系は分けてもいいかも。

DB の機能に検索を任せる場合、外部サービスを利用するのと同じように Gateway を用意すればいい。

DI で Gateway を取り込むようにすれば、外部サービスを参照している部分だけテストで切り替えられる。
ただし、Gateway の動作は外部サービスに依存しているので、最終的に全てを統合したシステムテストもする必要はある。

Service はいちいち mock にしなくていいかも。
Gateway は外部サービスだけど、Service はローカルで実行できるし。

Repository や Gateway などの状態を持ったサービスとやりとりする部分も、モックにすれば不変になる。
だから、それを使う内部のサービスも不変性を持たせられる。
不変性は実装の問題なので、規格さえ決まっていれば不変性のあるオブジェクトも、ないオブジェクトも自由に作れる。

Storage は共通化するための規格なので、temporaryUrl は例外的なインタフェースになる。
となると、Storage 経由じゃなくて Amazon S3 のクライアントとかで扱った方がいいんだろうか？Gateway を用意する？

UI を CQRS にするのはいいかも。
ほとんど UI では API に処理を任せてるから、Gateway に Command を投げるなり、QueryService で API とほとんど同じ QueryModel を得るなりするだけで十分だし。

CQRS の場合、Repository というよりは Command をどこかで処理する Gateway とか Service があればいい。Repository を特別扱いしない。

CQRS における QueryModel と Command はどちらも不変になれる。
変更する情報そのものを Command として一塊にしているので、あとは Gateway とかに投げて処理するだけだ。変更された結果は必ず QueryModel を介して取得する。
もちろん、Entity を Command として扱うこともできる。その場合でも QueryModel は Entity と別に用意して、単に可変の Command という扱いだ。

データベースに保存するかどうかはアプリケーションレベルで制御したいと思ってるけど、そもそもモデルは DTO なのでインフラストラクチャを直接いじってるとも考えられる。
ある種の Gateway として考えた方がいいのかもしれない。Controller がアプリケーション層の役割も担っていて、そこから Gateway とそのモデルを叩いている。
細かいドメインロジックを書きたい場合は明示的に Agregate-Repository 構成を取った方がいいのかも。

設計ではドメインモデルとユースケースがまずあって、それから UI や DB の設計が入る。
API はどうだろ。外部サービスとのやり取りということで、Gateway にあたる部分だけど、まぁプレゼンやインフラと同様かな。
細かいところまで仕様を決めて、プロトタイプなり MVP なりの実装に進める。

axios からのレスポンスをモックにして、Gateway 自体をテストすることもできる。
ただ、そこまでしなくても、ドメインオブジェクトでアサーションして、変な値だけ落としておけばいい気もする。

Request に Validation や FormData を持たせてもいいかも。
あとは薄い ApplicationService から Gateway 経由で API を叩く。
その前処理として、Request でいろいろできるように。
ただし、Validator や FormDataBuilder などは委譲しよう。

ドメインモデルにプロパティを書き換える機能がなくても、Gateway で編集の動きをなぞれば必要なオブジェクトは得られるか。
ただ、別口で入力できるようにする方が簡単だよね。null のときだけ書き換えられるようにするとか。
逆に、イベントソーシングだと必ず編集の動きをなぞってオブジェクトを構築する。

CRUD のモデルは、entities を作らずに usecases で直接扱う。
usecases に ReadModel や WriteModel を定義して、単にデータモデルとしての Response や Request としてそのまま使う。
場合によっては PresentationModel も作らずにそのまま画面上で使えばいい。Gateway でインピーダンスミスマッチを解消しつつ、PresentationModel で使う計算を行う。
ReadModel と WriteModel は、WriteModel をベースにしつつも分けたほうがいいと思う。ReadModel が WriteModel に従って、描画にだけ使うプロパティをつけた感じに。
ReadModel と WriteModel の形が一致しない場合は Controller で変換しよう。

Repository は DomainService、Gateway は ApplicationService の層に近い。
少しだけ立ち位置が違って、でも Gateway の一部として Repository がある感じ。

Gateway を Vuex や Flux に向けて、Store を参照すればいいのかも。
Presenter で処理しようと思ってたけど、単に API とかから取ってきたものを別の Gateway で Store に流したり、Store から取ってきたものを API に流したり、アプリケーションの中でやってしまっていいのかも。

Gateway の基本形は find, save, destroy で、とりあえず CRUD を揃えた感じ。
単に API を叩くだけなら find, create, update, destroy にする手もある。

SPA にしてもサーバー担当の負荷はあまり変わらないか、むしろ増えたように思える。
いちいち API にして、クライアント側でも Gateway 用意しないといけないし、やりとりも面倒だ。

Repository 以外の Gateway も存在する。
Logger は Repository の一種と考えることもできるけど、例えば Dialog とか、外部の機能を内側から扱うためには Gateway を介する。
まあ、Dialog とかは単に Presenter に任せてもいいと思うけど。

Vue のフォルダ構成はどうしようか？

App や store, router は src の直下でいいと思う。
あとは ui, api, それに各コンテキストで区切って、ui には components や views、コンテキストには usecases, entities, gateways, presenters, controllers といったところか。
api はそれぞれのコンテキストの中に直接置いた方がいいかもしれないけど、ApiAccess だけは外に置くか？

Interactor は Presenter に合わせる。
先に Presenter の出力があって、次に変換がある、という感じ。

だから、画面にフォームがあったら、フォームの Presenter を用意して、次にフォームの初期化、入力に対するアクション、保存、キャンセルなどを扱う Interactor を作る。
出力が入れ子になるような場合は別の入出力として改めて分けたほうがいいかも。どっちにしても詳細は Entity や Gateway に任せるべきで、Interactor は薄くする。

Interactor を置くと、Gateway でフィルタリングしても Service でフィルタリングしても外から見たら同じ。
Interactor によって、ローカルで処理してもリモートで処理しても Controller 側のインタフェースを変えなくて済む。

HTML の View は比較的テストしやすい。
なので、View まで含めてテストしてしまうのもありっちゃあり。
どっちみち Gateway は分けないといけないけど、それ以外はなんとかなる。

別のアプリケーションで同じ Gateway が必要になることはあるのか？
統合する際に Adapters のオブジェクトを別の UseCases で使い回すことは別に構わないはず。たまたま一時的に同じものだったとしても。必要になってから分ければいい。

Presenter と Gateway のインタフェースは Interface Adapters より先に Use Cases で定義する。
Interactor もそうだけど、Interactor は実装も Use Cases だし。
Use Cases には Interactor (Input Port)、Presenter (Output Port)、Gateway の 3 種のインタフェースが必要。
その上で、詳細だけを Interface Adapters で定義する。

まずはアプリケーションとしてのコンテキストを分けるのが大事。
「認証・認可サブドメイン」とか「プロジェクト管理サブドメイン」とかでまず分けて、その中でさらに「認証ドメイン」とかに分ける。
それぞれのアプリケーションは独立しているべきで、それぞれにアダプタがあって、Main だったり、Gateway 経由だったりで統合される。
逆に言えば、疎結合にするための工夫が必要。特に認証・認可のように共通で影響するような機能は疎結合にするのも難しい。

Active Record は Entity よりも ApplicationService に近い。
Factory と Repository の機能に Validator を加えたような感じで、細かいロジックは持ちにくい。
細かいロジックが必要なら Value を用意してマッピングに手を加えるなり、そこだけ ActiveRecord を Gateway として切り離して、DDD の ApplicationService にするべきかも。

DB は Gateway で隠す。
Gateway からは Entity が返ってくるので、小テストでは単に Entity を扱ったり Gateway での変換を Stub でテストしたりして、中テストで Gateway が DB に接続するテストをしよう。

API のラッパーは、API からのレスポンスをどう解釈するのか、テストする。
例えば、今回の場合は statusCode がなくて、data に{data, message, status}が入っているので、この仕様に合わせてラッパーを用意し、テストコードを残す。
その上で、それぞれの Gateway とそのテストを作っていこう。こちらはレスポンスをさらにエンティティへと変換する。また、エンティティをリクエストに変換する。

API クライアントのテストはレスポンスをモックにする。
ステータスコードとか、データを取り出せるようにして、それに対する処理が正しいことを確かめる。
とくに、Gateway として実装した場合は Entity への変換も入っているのでしっかりテストしておこう。

そもそも単なる CRUD だと、Gateway も CRUD にしてしまった方が楽かも。
もう Entity を介さずに、Interactor から直接 Gateway を叩くだけ。

Repository は Command のためにあるので、Query は分けてしまってもいい。
Query は Repository を通さないけど、Gateway の一種として、外部のサービスからデータを取得する。

Presenter は Interactor や Gateway を知らない。
ただ、Interactor の方から Presenter のインタフェースを叩いて、データを渡すだけ。

データをキャッシュするために取ってくるのは、Interactor の都合と考えていいのかも。
つまり、init()とかで持ってきて、Interactor の中に状態を持ってしまってもいい？
いや、Interactor にそういう状態を持ってしまうと同期するのが大変なので、やはりそこはリポジトリに任せたい。
Gateway とそれに被せる Proxy 持って、Proxy の機能は Controller とか具体的なとこで叩くのはありか？

オンメモリの Gateway は序盤で作ってそのままテスト用に残しておいたほうがいいかも。
api/gateways を置き換えつつ、test/gateways にでも移していけばいいだろう。

そもそも CRUD だとドメインが貧しくて、アプリケーション層を作る旨味がない。
これがただクリーンアーキテクチャを採用してもダメな理由だと思う。
あと、API を叩くだけの SPA でも同じことが言える。SPA のドメインは「API を叩く」くらいで、ほとんど Gateway にまとめられる。
まあ、画面で複雑な描画処理をする場合はそれが一つのドメインとして考えられるかもしれないけど。

イベント駆動のフレームワークだと PHP のようなバッチ型よりは処理の単位が小さくなるので、Interactor も小さくなると思う。
それこそ Controller から Gateway を叩いても変わらないくらいに。
でも、途中で入力を受け付けるような CUI もあるよね。ああいうのはどう捉えたらいいのかな？一旦 Interactor で処理して、Presenter でさらに質問を出力するのか？

Store にフィルタを置くのは変。
ただ、Gateway でフィルタしたものを取ってきて置き換えるのはある。

Gateway の仕様は Interactor の要求によって決まる。
例えば、Interactor でフィルタリングするなら Gateway は all()だけでもいいし、DB や API でフィルタリングするなら Gateway につけたらいい。

フィルターは単にヘルパーとかサービスにしたらいいと思う。
外部サービスに任せられるなら Gateway に載せてもいいけど、細かい処理をしないといけないようなら分けたほうが柔軟。

UseCases と Gateways を用意するのはあり。
とりあえず、簡単な構造体と Request/Response の定義。
ただ、Controllers や Presenters は Vue だと Page にまとめてしまうのが手っ取り早い気がする。

「内側だけに依存する」

これがクリーンアーキテクチャの柱。
逆に、データベースや API が先にあって、そちらを変えられないようなら、どうしても内部が外部に依存してしまう。
無理やり Gateway で吸収するのか、諦めて別の方法を取るのか、あるいはその折衷案も考えられるが、簡単な正解はないと思う。

Entities だとヘルパーは汎用サブドメインになると思う。
UseCases でも基本的には Entities を扱うことになるので、ヘルパーが必要な処理はだいたい Entities か Gateways にまとまりそうだし。
となると、ヘルパーが必要なのはインフラ側かな。ViewModel を構築する際には特に Date の変換とか、ヘルパーにまとめられる処理がたくさんある。

Clean Architecture を読んで良かったのは、語彙が増えたこと。
Interactor (Input Port), Presenter (Output Port), Request, Response, Gateway あたりは特に便利だし。

Vue + Clean Architecture でやるなら、とりあえずビジネスルールとゲートウェイの実装はフォルダを区切った方がいい。

以下のような構成になるだろう。

```
- src/
- - lib/ → ビジネスルール
- - - entties/
- - - usecases/
- - - gateways/
- - api/ → ゲートウェイの実装
- - controllers/
- - presenters/
- - views/
- - components/
- - models/
- - App.vue
```

lib;/はモバイルなどに移植する場合でもそのまま流用する。
api/も移植で使えるけど、モバイルなら db/とか、他の実装も追加するかも。
それ以外は、Vue 側で使うのが中心なので、src/直下に展開していいと思う。まあ、直接的に触るのは App と Page で、Template とかは逆に ui として分離できるかもしれない。

Vuex や VueRouter も「外」なので、Gateways を経由するといい。
Gateways を挟んでおけば、実装が Vuex なのか、LocalStorage なのか、Api なのか、ということは UseCases から切り離せる。

Interactor の実装に@Inject とか書いて DI するのは DI のフレームワークに依存してるけどいいのかな？
Controller のプロパティに一旦注入して、そこから Interactor とか Gateway を注入しても大丈夫？

CleanArchitecture のデータフローはざっと以下のような感じ。

Input → (Controller) → Request → (Interactor) → Response → (Presenter) → ViewModel → (View) → Output

さらに、Business Rules は Gateway を用いて、Entity ベースで外部のシステムとやり取りする。
Controller と Presenter はこのシステムを外から使うためのインタフェース、Gateway は外のシステムをこのシステムから使うためのインタフェースになっているわけだ。

アプリの内部で Entity が id を持たない場合、Gateway/Repository でも save にまとめるよりは create と update で分けた方がいいかも。
結局、id を送ったり送らなかったり、場合によっては全然違うデータを扱ったりもするので、Gateway/Repository の段階で分けておいた方がいい。

Controller/Presenter は Interactor とのやりとりを扱うけど、Gateway は Entity を扱う。
外部のサービスを Entity として取り込んだり、逆に Entity を外部のサービスに送り出したりするのが Gateway である。
だから、外部のサービスの API のために Entity を変換する処理も含まれる。

Repository は Gateway の一種として実装する。
永続化という処理が Entity だけでは賄えなくて、インメモリであれデータベースであれ、外部との接続を必要としている。

Gateway のインタフェースは UseCase の方にある。
しかし、実装は Adopter なのでその外。

永続化する必要がなかったら、Repository はいらない。
API サーバーと通信するだけが目的なら、Interactor からいきなり Gateway を呼び出しても構わない。
その上で、内側でも永続化したいのはキャッシュとか。そのときは Repository を作ればいい。

同じデータを色んな扱いにするときは、ドメインまで同じで、アプリケーションから分けるのか？
いや、それだとドメインの集約が変な気もするし。
ドメインの時点でもう分けてしまって、別のエンティティとして扱いながら、Gateway の先では同じデータとして永続化するでもいいのかな？できるだけ合わせる？

境界を越えるデータは、シンプルでなければならない。
エンティティは境界を越えるべきではない。複雑すぎる。
そのために、Gateway や Presenter に渡すデータを変換する必要がある。

シンプルなデータは、テストしにくい領域に渡ってもテストする部分が少ない。
例えば、View が ViewModel を単純に描画するだけなら、View をテストする代わりに ViewModel をテストすることで置き換えられる。

Gateway で扱うサービスと Entity の粒度が異なっていると、Gateway でその差を吸収することになってめんどくさい。
特に、保存用の API サーバーや DB サーバーの影響は大きいので、できるだけ DB の構造を確定させるのは遅らせたい。
先に Entity を詰めていくのが大事。そうすれば、それに合わせてサーバーを用意して、Gateway も単純になる。

Gateway には、API 固有のオプションなんかもある。
Gateway はアプリケーション層にインタフェースがあるけど、内容を決めるのはアプリケーション層で何が必要か、そして、接続するサービスにどんなオプションを渡せるか、だ。
元々の仕様は接続するサービス自体にあって、アプリケーション層の要件に合わせて必要最低限のインタフェースだけ決める。

アプリケーション層のファイルは usecases/にまとめてみた。
interactors, requests, responses, gateways と、UseCase の実装として commands, queries も。
entities と一緒に core とするのはなんか綺麗じゃなかったし、まとめないと数が多くてごちゃっとしてたから。

Interactor で Gateway を使って、そのまま Entity を扱うのはありだと思う。
元々、Repository を被せるとクドいことがある。Repository の代わりに、永続化する外部のサービスを使うイメージ。

Repository をそのまま Gateway の実装にするのは違う。
Gateway はアプリケーション層、Repository はドメイン層なので、依存関係が逆。
逆に、Repository の実装として Gateway をそのまま実装するのはどうなんだろう？でも、Gateway のインタフェースは集約と一致しないこともある気がする。

Repository が Gateway を使うかどうかは、永続化に関係ない。
単に変数で持つだけなら Gateway 使わないし。
だから、Repository は Gateway ではない。
むしろ、Repository はドメイン層に置くことになるだろう。

Vue のエンティティは、json を Date にしたりするとこ。Gateway がやる。
そんで、Repository に保存する。
UseCase で覆うことで、Controller からは API で処理してるのか、自前で処理してるのかは関係ない。

API と通信するだけのクライアントでも、Gateway と Entity は存在するので、単純なビジネスルールはある、と考えられる。
いや、むしろ「API と通信する」というビジネスルールで捉えて、いきなり Response で扱うのもあり？アプリ自体が Gateway として機能する…

インフラはドメインに依存してもいいのか？

Gateway の実装はドメインの Entity に依存してるけど、Controller や Presenter はあくまでも Request や Response のみに依存するべきなのかも。
となると、Entity をそのまま Response に入れて渡すよりも展開して渡したほうがいいのか？必要な情報だけ渡せる利点はあるものの、やりすぎかもしれない。悩ましいところだし、ケースバイケースで使い分けることも考えられる。

Repository による記録の単位は、集約の単位と一致する。
だから、Gateway の実装によって記録の単位が変わったりはしない。むしろ Gateway で吸収する。
まぁ、吸収しなくてもいいようなシステムを使う、あるいは作るのが理想だけど。

Gateway は外部のシステムとやり取りして、Entity で結果を返す。
つまり、外部のシステムの使い方は Gateway の中に隠されている。HTTP でも SQL でも RPC でもファイルシステムでもなんでもいい。
よくあるのはデータの読み書きだけど、それ以外のシステムを使うことも考えられる。まぁ、それも大体は何らかの書き込みと捉えていいかも。

「記録する」というビジネスルールを実装したのが Repository だ。
アプリケーション層にある Gateway と似ているけど、Repository はドメイン層にあるべきだと思う。
Entiry を生成する Factory と対になっていて、そちらも「生成する」というビジネスルールを実装している。

Vue だと、Store を main 代わりにして、ApplicationService や Gateway を初期化するのも考えてる。
Component の中で初期化すると、ui が core だけでなく api も知っている必要があるし、api への参照を Store にまとめたい。
それに、Component の Controller 部分も綺麗になるし、実質的には Controller が Store に移ったような構成になる。Component は Presenter としての役割に集中できる。

Gateway は、Application が他の Application にアクセスするための Controller として振る舞ってる、と考えてる。
アプリケーション層にインタフェースを置いて、インフラ側で実装する。アプリ側は Gateway とか、あるいは簡単なものなら直接 Repository として、インフラ側は Api かな。

Repository も外部ストレージにアクセスする場合は Gateway として実装されるべきかも。いや、もう少し複雑なら、Gateway は別に置いて、それを Repository でラップするのもありか。
この時、アプリケーション層で Gateway のインスタンスを作ったら意味がないので、main でまとめて注入する。アプリケーション層でインスタンスを作ってしまうと、それは依存になる。

DDD だと Factory はアグリゲートを構築するためのもの。
データ形式の変換に使うのはちょっと変か。
ドメインモデルの境界を繋ぐためには？
クリーンアーキテクチャだと Presenter/Controller や Gateway だよな。

モックが多いと修正がめんどい。
ゲートウェイは仕方ないけど、サービスはモックにしたくない。

場当たり的にゲートウェイを作っておいて、後から置き換えてもそれはそれで成立しそう。

ゲートウェイの出力はエンティティの方がいいかも。

ゲートウェイの出力がエンティティになってないと、restruct を別途叩かないといけない。

ゲートウェイとエンティティの形式が正しいかどうか、どうしたら確かめられるか。
とりあえず、ゲートウェイの出力をエンティティにしておけば、ゲートウェイを叩いて動作確認するときにエラーで落ちるかな？

開発用のストアでゲートウェイもテストできるといい。

外部サービスに渡せる形に整形したら、あとはゲートウェイに投げればいい。

groupId や userId がゲートウェイの実行に影響するなら、Factory を DI してそこから Client を取得する。

サービスからサービス、ゲートウェイからゲートウェイを呼び出すような操作は避ける。

アプリケーションサービスやゲートウェイだと横の呼び出しは避ける。

外部サービスの API はゲートウェイのモックより Http::fake()でテストした方がいいかも。

API に groupId が必要だけど、呼び出す側で持ってないならあらかじめ API クライアントやゲートウェイに設定して、それを呼び出す側に DI する。

ゲートウェイで取ってくるデータはとりあえず public プロパティでもいいので型をつけておくと、どういうデータを内部で扱うのかわかりやすい。

サーバー側で別のサービスの API を叩いて、クライアントのために仲介するような処理でもゲートウェイは挟んだ方がいいか。

API とゲートウェイのインタフェースを分けて考えると、ユーザー情報は API でしか使わないのに気付ける。

アプリケーションサービスから他のコンテキストのアプリケーションサービスにアクセスするときは、ゲートウェイを定義しておいて、別のところで実装したものを DI する。

ゲートウェイは別のドメインのアプリケーションと考えることもできる。

外部インタフェースの仕様が決まってなくても、こちらからどういう情報が欲しいか、どういう情報を送れるか、は決められる。それに合わせて、先にゲートウェイを用意してしまえばいい。

SDK があっても、ゲートウェイの層があると置き換えやすい。
場合によっては SDK が置き換えに対応していることもあるので、その場合は省略してもいいかも。

ビジネスロジックをサーバーに丸投げする場合、アプリケーション層にゲートウェイを用意すればいい。

リポジトリの実装もゲートウェイの一種と言える。
レイヤードアーキテクチャで言えば、インフラはゲートウェイ、プレゼンテーションはプレゼンターとコントローラーを定義する層だ。

外部サービスの操作は一つのアクションを一つのゲートウェイにまとめる。

実装で tenant ごとに connection を切り替えるような場合、client に直接委譲するのではなく、tenantId から connection を取得する clientFactory を DI して client を得る。
