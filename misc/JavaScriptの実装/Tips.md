# JavaScript Tips

## 多言語化

i18next を組み込むのが有力。

## バリデーション

スキーマ定義には yup が便利。

yup の schema.camelCase().cast(data)で、snake_case の JSON を camelCase に変換して扱えたりもする。

## 不変性

不変な情報を可変のように簡単に扱うライブラリとしては `immer` が便利。
https://github.com/immerjs/immer

## その他

[JavaScript: 文字数を正確にカウントするには？ - Qiita](https://qiita.com/suin/items/3da4fb016728c024eaca)

[How to Force Use Yarn or NPM](https://www.freecodecamp.org/news/how-to-force-use-yarn-or-npm/)

[JS の非同期処理を理解するために必要だった知識と学習ロードマップ](https://zenn.dev/estra/articles/js-async-programming-roadmap)

[Navigation API による「JS での画面遷移」と SPA の改善 | blog.jxck.io](https://blog.jxck.io/entries/2022-04-22/navigation-api.html)

クラスを指定するだけで郵便番号の自動入力を設定できる JS ライブラリ
https://github.com/yubinbango/yubinbango

今のところ js のテストで api モックするなら msw が良さそう。
storybook のアドオンがあったり、localhost で試す場合にネットワークタブに通信が表示されたりするので他の選択肢よりも使い勝手がいいと思う。

コンポーネント単位のビジュアルリグレッションテストを行う場合、Storybook が使える。
React や Vue に対応している。
