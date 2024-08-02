コンポーネント単位では`testing-library`を使う。

スクリーンショットテストにStorybookを使うことがある。

E2EテストにはSeleniumやCypress, Playwrightなどの選択肢がある。

Reactのtesting-libraryでは、renderしたcontainerからcontainer.querySelector("img")のように要素を取得するよりも、screen.getByRole("img")で取得する方がユーザー寄りのテストになる。
https://qiita.com/kobayashimakoto/items/2aa2bbcf6d47b697e3e6
