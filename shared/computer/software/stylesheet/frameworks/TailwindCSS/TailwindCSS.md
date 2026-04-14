Tailwind CSSはHTMLのstyleに直接書くのを便利にしたもの。
テーマの設定とか、拡張スタイルを定義できる。

`--color-primary`や`--color-secondary`みたいなカラーテーマを定義して使うことがよくある。`bg-*`のような色を指定するところで追加したカラーテーマが使えるようになる。`h-full`や`m-auto`みたいなのを自分で増やせるイメージ。
shadcn/uiが生成する`globals.css`の定義とか見ると参考になる。
テーマで設定できる項目は公式ドキュメントを参照。
https://tailwindcss.com/docs/theme#theme-variable-namespaces
