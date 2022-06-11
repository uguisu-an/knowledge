# React Tips

## 標準的なコンポーネントの利用

Dialog や Tooltip など便利なので大体使う。

https://mui.com/
https://react-bootstrap.github.io/

## 状態管理

Redux で。

最近は Recoil なんかも名前は聞く。

## 多言語化

Hooks で i18next を扱える react-i18next を組み込むといい。

react-hook-form と yup で多言語対応する場合、yup のメッセージを制御するのではなく、エラーの有無だけ確認して、jsx 側で明示的に t()を叩く方がいい。
yup のメッセージを t()で制御しようとすると、schema をいちいちコンポーネントの中で動的に生成しないといけなくなるし、それだと schema から生成する inferType も扱いづらくなってしまう。

## フォームの作成

react-hook-form で非制御コンポーネントにするといい。yupResolver を使って yup と連携できる。

https://react-hook-form.com/jp/
https://zenn.dev/yuitosato/articles/292f13816993ef

## その他

React 18 の時点では、コンポーネントのラッパーを使うよりもフックを使うのが推奨されている。

環境変数を書き換えたら npm start をあらためて実行しないと反映されない。

型指定の FC や VFC は、非推奨になっている。
props に含まれる children の型指定が緩いのと、プロパティの defaultProps が現在では非推奨になっているため。
https://kray.jp/blog/dont-have-to-use-react-fc-and-react-vfc/
