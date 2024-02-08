# UI 設計

## UI Stack

UI Stack の参考資料

UI の状態を 5 つに分類する考え方

初出とその翻訳
https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/
https://postd.cc/how-to-fix-a-bad-user-interface-part1/

その他の紹介記事
https://zenn.dev/kii/articles/progress-indicator-ui
https://note.com/taka44/n/n07e39c66df6a
https://note.com/nowim/n/n185d63cfda5c
https://digitalidentity.co.jp/blog/creative/ui-stack.html
https://note.com/earlgray_mk/n/n50129e0ac237

## その他

https://webnaut.jp/design/620.html

入れ子のツリーは検索結果の表示に向かないので、単なるリストやテーブルで表示するといい。
というか、入れ子のデータに対して全ての階層に検索をかける場合はフラットに表示した方がいい。
データの扱いと表示を合わせる。

アイコンとテキストを併記すると、「大きい」という単純な利点も得られる。

[chot.design - 毎日ちょっとずつデザインを学ぼう](https://chot.design/)

[Web 制作の現場で使える Web サービス 15 選！無料で使えるサービスを集めてみた](https://pulpxstyle.com/web-service/)

[コーディングを助けるためにデザイナーができること ① | knowledge / baigie](https://baigie.me/officialblog/2020/03/26/design-cording/)
[コーディングを助けるためにデザイナーができること ② | knowledge / baigie](https://baigie.me/officialblog/2022/01/14/design-cording-vol2/)

ボタンのアンチパターン
[“アプリ UI あるある”な 6 つの NG ボタン 人事 SaaS を例に専門家が解説（ITmedia NEWS） - Yahoo!ニュース](https://news.yahoo.co.jp/articles/06e92a1dac29a644439a6221a139a06dbc8fa88b?page=2)

UI で特に重要なのはアフォーダンスとフィードバックだ。
つまり、触る前から見ただけでどういう操作を求められているのか分かって、触るとどういう結果が得られたのか分かる。

UI 設計の成果物
https://www.graat.co.jp/blogs/ckcbgogqykue50869r4oyn2va

UI の確認事項
https://mag.ibis.gs/creative/design/uiux30_200108/
https://pantograph.co.jp/blog/uiux/entryform-example.html

UI 実装時の指摘事例
https://onedarling.site/web-design/easytocoding-design/
https://b-risk.jp/blog/2019/12/code-friendly/
https://b-risk.jp/blog/2021/02/code-friendly-2/
https://qiita.com/y_hokkey/items/de88447bd31d9379b80a

この製品はどんな問題を解決するか
この製品のコンセプトは何か
この製品はプロトタイプを作ってユーザーレビューを受けたか

この画面はどこから情報を取得するか
この画面はどの情報を変更するか

この要素はどの範囲を操作できるか
この要素はどこに揃えるか
この要素はどこに余白を入れるか

UI の最初は全てが接触した相対位置の四角だけで考える。
Web アプリでも Native アプリでもここは同じ。margin と padding を明記する。

SmartHR のデザインシステムやガイドライン
https://smarthr.design/

Apple のデザインの tips
https://developer.apple.com/jp/design/tips/

[UI デザインのフローを標準化する試み「MONDRIAN」はじめました｜ Chatwork Design ｜ note](https://note.com/chatworkdesign/n/n9d3ee45b2e82)

ユーザーを単に驚かせるのではなく、新しい視野を開かせる。

ユーザーの目を引くためには驚きも必要だが、長く使っていくなら快適さしか要らない。
初めて見た時には驚いても、慣れたら快適さしか残らないように作らないといけない。

美しさは快適さに繋がる。

[モデリング：表からは見えない UI デザイン - Qiita](https://qiita.com/xrxoxcxox/items/425a6223126da5403682)

[オブジェクト指向 UI デザイン ── 使いやすいソフトウェアの原理 WEB+DB PRESS plus | ソシオメディア株式会社, 上野 学, 藤井 幸多, 上野 学 | コンピュータ・IT | Kindle ストア | Amazon](https://www.amazon.co.jp/dp/B0893RK6WC)

プレゼンテーション（ビュー）、インタラクション（コントローラー、ユースケース）、モデル、のレイヤーで分ける。
複数のビューで同じユースケースが、複数のユースケースで同じモデルが使われる。

一覧に件数をつける場合、一覧の内容と件数は一致していないと気持ち悪い。

一つの画面には複数の機能が混ざっていることが多い。
まずはそれぞれの機能に必要な動線を考えて、それらを統合したものを画面にしないといけない。

アプリケーションやビジネスロジックが先、UI が後。
早くから UI が欲しい場合も、アプリケーションやビジネスロジックを考えてから UI を作る。省略できない。

早くから UI が欲しかったら、そもそもアプリケーションの規模を小さくすることから始める。

ソフトウェア開発で「UI」と呼ばれているのは「”アプリケーションの”UI」だ。アプリケーションを考えずに UI を考えるのはおかしい。

細かいポイント

[2022 年、もっとも注目された UI デザインのテクニックのまとめ | コリス](https://coliss.com/articles/build-websites/operation/design/ui-ux-micro-tips-best-of-2022.html)

UI のデザインはアプリケーションの下。アプリケーション抜きには語れない。

管理ページはサイドバーの方が使いやすい。要素が多いから、ナビゲーションバーでは足りないことが多い。

データの自由度が高すぎるとビューの制約が強くなりやすい。
例えば、2 段までの階層なら大項目でグルーピングされた小項目のように縦に表示してもいいけど、何段まででも作れるとインデントやフォントサイズで入れ子を表現するにも限界がある。

使い勝手はレスポンスというか、思った通りに動くのが全て。

[ダメな UI を作るコツ｜ yumemi](https://note.com/dreamui/n/nd8a35fe5f8ac)

[【UI シリーズ】選択肢の管理 ｜ caroa blog ｜ caroa bx design partners ｜ブランド体験をデザインする共創型トータルブランディングパートナー](https://caroa.jp/article/IhEq8__-)

[【閲覧注意】イライラ不可避な UI デザイン 10 選 #UI - Qiita](https://qiita.com/9re-pe/items/0296f8a8c11490efda21)

1. キレイに並んでいない
2. じっくり読まなきゃわからない
3. 情報のまとまりがわかりづらい
4. 情報量が多すぎる
5. 言葉で説明されると辛い
6. いつものように使えない
7. すごく待たされているように感じる
8. 失敗を想定していない
9. 判断に困る
10. 自己満足で思いやりがない
