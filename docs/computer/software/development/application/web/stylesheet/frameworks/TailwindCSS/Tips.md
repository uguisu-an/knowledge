# TailwindCSS Tips

## Setup

[blahrim - Minimal Tailwind + React in VSCode setup](https://sarimabbas.com/blog/tailwind-setup)

## 考え方

ユーティリティであり、コンポーネントではない。
コンポーネント単位で分解せず、ユーティリティ単位で分解して考える。
コンポーネントは React や Vue で作ればいい。

## その他

[tailwindcss 事始め｜ tailwindcss 入門編](https://zenn.dev/knaka0209/books/9e86ccb888758c/viewer/6643a2)

tailwind は outline よりも ring の方が操作しやすい。

tailwindcss は form-control もリセットされるので、@tailwindcss/forms プラグインを入れると簡単な初期化が設定される。
まぁ、このプラグインを入れても見た目がやぼったいので、ここからさらにスタイルを追加する形にはなる。appearance-none とか書かなくて済むってだけ。

tailwindcss では、line-height が leading, letter-spacing が tracking と呼ばれる。

tailwind 色々書いてるけど、bg, m, p, text, border のことがほとんど。
あとは flex/grid/block/hidden みたいな display 系とか、state や breakpoint による拡張表記くらい。
