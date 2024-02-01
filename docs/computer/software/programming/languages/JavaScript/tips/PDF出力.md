# PDF 出力

## HTML から PDF に変換する

jsPDF を使う。

https://github.com/parallax/jsPDF

HTML から PDF への変換は以下の API を使う。
https://raw.githack.com/MrRio/jsPDF/master/docs/module-html.html#~html

組み込みのフォントでは日本語を描画できないので、日本語フォントを追加する必要がある。
"Use of Unicode Characters / UTF-8" の欄に書かれている変換器を使って ttf ファイルを js ファイルに変換して、import する。Noto Sans は otf しかないので IPA フォントを"Noto Sans"として登録した。

横向きの A3 で出力する例は以下の通り。

```js
import jsPDF from "jspdf";
const doc = jsPDF({
  orientation: "landscape",
  unit: "px",
  format: "a3",
});
doc.html(htmlElement, {
  width: 892,
  windowWidth: htmlElement.clientWidth,
  callback(doc) {
    doc.save();
  },
});
```

非同期処理になるので、保存処理は callback: (doc) => void プロパティの中で行う。
この API のときは HTML 側で指定したフォントを使うため、setFont()は意味がなかった。
横幅を調整したい場合は element.clientWidth を windowWidth に、PDF 側の横幅を width に設定すると横幅いっぱいに描画される。
