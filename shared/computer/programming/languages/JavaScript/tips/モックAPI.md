# JavaScript Tips: API Mocking

今のところ js のテストで api モックするなら msw が良さそう。
storybook のアドオンがあったり、localhost で試す場合にネットワークタブに通信が表示されたりするので他の選択肢よりも使い勝手がいいと思う。

https://mswjs.io/

コードに組み込まないで、ブラウザテストとかしたいなら json-server もある。
こっちは js 以外でも使える。

https://github.com/typicode/json-server
