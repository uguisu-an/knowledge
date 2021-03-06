メタフィールドは API のパフォーマンスが悪い。
タグで済む実装ならタグの方がいい。

Price はデフォルトで"0"、Compare At Price はデフォルトで null になる。

商品を id 以外で判別する場合、handle か vendor&sku で区別するのが良さそう。
handle を使うと URL を変えられなくなるのと、すでに存在する商品を上書きすることになる。
vendor&sku を使うとそれらは変えられなくなるのと、重複が存在するのが欠点。
どちらにも長所と短所がある。

tags はクエリへの反映が遅くて、登録してすぐは取れないことがあるので避けた方がいい。

API なら商品の handle は変更できる。

Shopify の場合、全体のレイアウトは Frame(navigation) > Page(title) になっている。
Frame にサイドバー、Page にヘッダーが含まれていて、サイドバーは navigation に要素を直接渡す。

Shopify Admin API
デフォルトの Location は location を id なしで検索すると取得できる。

空の metafield はできるだけ送らない。

Shopify のインポートは CSV 作る形式の方が登録も速くて簡単だったかも。
ただ、細かい情報はどうしてもメタフィールドとか必要になるので API から投入するしかない。

Shopify 自体は感触よかった。
アプリでわりとなんでも作れるし。

「決済方法を更新するリンクを送信する」を GraphQL から叩くには、customerPaymentMethodSendUpdateEmail mutation を呼び出す。write_customers 権限が必要。

https://help.shopify.com/ja/manual/customers/manage-customers#part-de1e11b91ba72a55
https://shopify.dev/api/admin-graphql/2022-01/mutations/customerPaymentMethodSendUpdateEmail

Shopify でサブスクやるなら Shopify アプリでやるみたい。
そうなると、決済方法なんかもアプリ側に持っているはず。

Liquid のフォームから送信できる情報の種類は以下のドキュメントにある。
https://shopify.dev/api/liquid/tags/theme-tags#form

Liquid で使える変数の情報は以下のドキュメントにある。
https://shopify.dev/api/liquid/objects

Shopify に商品があるかどうか判定する部分もまとめてクエリ投げた方が軽いか。

属性が増えてもクエリのポイントは変わらない。
オブジェクトが増えるとポイントも増える。

shopify の update や create でこける可能性があるので、翻訳が無駄に走る可能性もある。ここはキャッシュでしばらく持った方がいいかも。

商品数が 5 万件を超えるのは避けた方がいい。

ゼータの問題は単純に Shopify の推奨する商品数よりも数が多いこと。

shopify のレート制限は 1 秒に 50 ポイントずつ回復する形なので、1 件 100 ポイントでも 30 件は更新できるはず。Create なんかは少し軽いのでもう少し余裕がある。

Shopify のようにポイントでレート制限する場合、厳密に制御するのは手間がかかる。
とにかく普通に回しておいて、レート制限に引っかかる前提の方がいいかも。

Shopify の 1 分のレート制限に結構引っかかる。

更新だけなら shopify のレート制限に引っかからず普通に動くかな？

Shopify のエラーが出たら、しばらく ProductCreate をデータベースにキャッシュしたりできないか。

Shopify への新規登録が「溜まる」のをどうするか。

Shopify の商品数が 5 万件超えたらレート制限されるエラーは VARIANT_THROTTLE_EXCEEDED なので、これはこれで拾った方がいいかも。

Shopify 本体に予約注文はないけど、拡張するアプリがあるみたい。

予約システムも Shopify でできるんじゃないか？

Shopify の商品数を数えるなら、REST API の方がいい。
定期的に数えて、キャッシュとかに持っておくのはどうかな？

製造終了は status: "ARCHIVED" 使った方がよかったかも。

Shopify の「税を適用する」は税込表示と対応している。
ただ、チェックを入れても商品自体を税込で設定しないといけない。税は価格から引かれる形で設定される。

Shopify の制限が厳しいので、5 万件を超える予定ならパフォーマンスは気にしなくていいかも。

「在庫切れの場合でも販売を続ける」は ProductVariant.inventoryPolicy と対応している。
yes なら CONTINUE、no なら DENY で、デフォルトは DENY になっている。

ストア内の全商品が 50000 件を超えると、1 日に 1000 件までしか新しい variant を（実質的には商品を）登録できなくなる。
https://shopify.dev/api/usage/rate-limits#:~:text=The%20following%20Admin%20API%20resources%2C%20in%20both%20GraphQL%20and%20REST%20versions%2C%20have%20an%20additional%20throttle%20that%20takes%20effect%20when%20a%20store%20has%2050%2C000%20product%20variants.%20After%20this%20threshold%20is%20reached%2C%20no%20more%20than%201%2C000%20new%20variants%20can%20be%20created%20per%20day.

Shopify の variant 作りすぎってエラーが出てた。

handle は外部のデータと紐づけるために使うといい。
turn14 だったら itemId を使って、turn14-{itemId} みたいにすると、itemId だけで shopify を検索できる。

osiset/laravel-shopify で Shopify のエラーがうまく拾えてない。
レスポンスが変な気がする。多分、Shopify のエラーじゃなくて、そもそも接続のエラーで Guzzle から直接返ってきてる。
exception はシンプルに shopify error にして、warning だけ出すか。

Invalid argument supplied for foreach()

Shopify で GraphQL 使ったのはなかなか楽しかった。
ただ、自分で GraphQL のサーバー作るならクライアント側も GraphQL を扱える人がいないと意味ない。エンタップでは REST が無難か。

Shopify もあんまり細かく呼び出しすぎるとエラーになることがある。

Shopify の "gid://shopify/{type}/{id}" みたいな id は API のために生成していて、内部では id をそのまま持っている。
特殊な形式で扱うと、id を受け取った時点でモデルも判別できるので、何種かのモデルのどれかを受け取る場合に役立つ。

Shopify のように連携して動くものは ngrok を立てるのもいいけど、開発サーバーを早めに立ててそっちにデプロイして動かすのもいいかも。細かいとこは先に機能テストで確かめる。

Shopify の管理ページからオンラインストアへの反映にも少しラグがある。

Shopify App の場合、基本的には Merchant が主体。

Shopify App は SPA の方がよかった。

Shopify の API に繋がらなくなったとき、Guzzle のレスポンスがそのまま返ってくるのいまいち。やっぱライブラリの動作が怪しい。素直に Shopify の最低限の SDK 使った方がよかったかな？

tags をつけてすぐはクエリで tag を検索しても拾えないことがある。

Shopify 側の検索の反映が遅い件は時間を空けたらいけるかもしれないけど、同期がおかしくなる可能性はゼロにならない。

Shopify の商品登録で更新まであると handle でやるしかないと思う。

インフラが Shopify でドメインも Shopify 前提のドメインになっているとしても、名前としてはサービス名の方がいいかな。「商品登録アプリ」とか。

Shopify の最初のロケーションをデフォルトロケーションにする、といった制約が決まっている場合は設定というよりもアプリケーションやドメインで扱う。

Shopify は Vendor を文字列で扱うので、Turn14 や Holley から取り込むときも同様に扱う。

Shopify 側に「今回のジョブで処理した」判定を加えると更新の手間がかかりすぎるかな？Tags なら登録時につけとくだけでいける？

Update に渡してない値は更新されないので、省略すればいい。

osiset/laravel-shopify
フォームには @csrf の代わりに @sessionToken を使う。
また、パスを VerifyCsrfToken の excepts に追加して CSRF チェックを無効にする。

shopify-app::layouts.default テンプレートなど、AppBridge が有効になっている画面でしか動かないので注意。
https://github.com/osiset/laravel-shopify/wiki/Authentication-Process
https://github.com/osiset/laravel-shopify/issues/911

今回は商品を更新するのが目的だったので、ドメインモデルも Shopify の商品に合わせたものになってる。

Shopify の stagedUploads の作り面白いな。最終的には S3 に丸投げというのも。

productCreateMedia の originalSource に指定した URL から Shopify の CDN にコピーされるので、originalSource は自分で用意したサーバーでなくてもいい。

handle は[0-9a-z]と-のみで、それ以外は単一のハイフンに置き換えられる。
例えば、"Oils & Oil filters"なら"oils-oil-filters"になる。
https://shopify.dev/api/liquid/basics/handle

Collection を作った後で公開するかどうか API から設定できるのが Shopify Plus だけなので、プランを確認する。
Plus でないなら、新しく作った Collection は手動で公開する必要がある。

バリデーションエラーは userErrors に入る。errors とは別。

商品のハンドルは強制的に小文字になる。
また、productCreate で重複する場合は"-1"のように通し番号をつけられる。

Shopify API
productCreate の際にタイトルがないとエラーなしで失敗して、{ product: null } が返ってくる。

Shopify アプリは開発ストアを作って個々に登録するのが良さそう。本番に登録する必要はないな。

検索は query:"tag:\"HOLLEY_ID:\*\"" みたいなワイルドカードも使える。

Shopify の公式では配送料を"Shipping rates"としている。

Shopify は基本的に価格か重量で送料を決定する。
個口が分かれる時は分かれる条件をはっきりさせれば、送料のディスカウントで処理できるかも。

Shopify の weight は送料計算のためにあるので、長さで送料が決まるなら長さを登録してしまった方がいいのかも。単位は適当でいい。
ただ、アプリならいいけど、手動でいじるときにそれを求めるのもちょっと変かなぁ。手動で入れたものも結局は同じ方法で処理されるし。

試しに API を叩くだけなら、ショップの管理画面でプライベートアプリを追加して、Password をアクセストークンとして使うだけでもいい。

Private-App を使うと、CustomApp とはまた別に直接アクセストークンを発行して利用するアプリを作れる。

商品と在庫の対応
Product:ProductVariant = 1:N
ProductVariant:InventoryItem = 1:1
InventoryItem:Location = N:N (InventoryLevel)

Shopify-API で商品を公開するのは、新たに publications ができて、channels や products.published は廃止される予定。
ただ、2021-10 版が廃止されるまでは使えるので、今回は published を使えばいいか。

アクセスモードがデフォルト (OFFLINE) なら、アクセストークンは長期間利用できる。

アプリのスコープは環境変数で持ったほうがいい。
Plus プランでないと使えないスコープもある。

inventory-service を指定すると、手動では在庫を操作できなくなる。

在庫の更新は adjust しかできない。
特定の値に更新したい時は手元で差分を取って adjust する。

InventoryLevel がひとつしかないと、inventoryDeactivate()できない。InventoryItem に一つは Location と InventoryLevel が必要。

inventoryActivate()の available は初期値しか設定できないので、すでに inventoryItem と location が紐づいていたら更新されない。

自動更新する商品を識別する方法の候補

- Variants.SKU で絞り込む
- 品番をタグに持って、Products.Vendor と合わせて絞り込む (MPN:xxxx)
- Turn14 の ID をタグに持って絞り込む (TURN14_ID:xxxx)

複数ある場合は全て更新すればいい。

在庫管理を Inventory-Service に任せると、Shopify 側では変更できない。

内部で在庫管理する場合、在庫数を持っておいて、注文された分だけ減っていく。
外部で在庫管理する場合、外部にある在庫数を同期する。内部的にやってることは大体同じだが、複数のチャネルで同じ在庫を扱っていたり、複数の倉庫があったりすると外部で同期する必要がある。

shopify 公式のクライアントがある。
SDK というよりは認証だけ任せて、post とかで制御する感じ。

インストール用のページと App-Bridge を使った認証があれば埋め込みアプリになる。
埋め込まないならインストール用のページがあればいい。

一つのストアを拡張するだけならカスタムアプリでいい。

Shopify アプリ自体はどこかにホスティングしないといけない。
単なる Web サービスとして動作して、認証は Shopify を経由する。

商品を id 以外で取得するのは handle だけど、handle を連携に使うと URL を自由に変えられなくなる。

shopify の商品管理の詳細ページの URL の最後に`.json`をつけると、json 形式で表示できる。
例えば、
https://example.myshopify.com/admin/products/7166574526637
を以下のようにする。
https://example.myshopify.com/admin/products/7166574526637.json
