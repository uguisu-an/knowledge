ChatGPT に要件定義を手伝ってもらうときに必要なのは、普通に要件定義するときに必要な問いかけと同じだ。

使い方は簡単だけど、重要なのは対象の分野における思考プロセスそのもの。

ChatGPT の思考を助けてやるには、質問の解像度を高めないといけない。

結局、各分野に通じてないと ChatGPT を使っても浅い。

ChatGPT が質問と回答の繰り返しで深掘りしていくのは思考のプロセスそのもの。

今のところ GPT は精度よりも速度を優先した方が使いやすい。

GPT-4 でプロンプトを作り込んで、GPT-3.5 で動かした時の精度を高める方法もある。

ある事柄を ChatGPT に説明させて、「間違いを指摘せよ」と課題を与えるテストがあったとか。
https://dot.asahi.com/aera/2023031500070.html?page=1

特定ドメインに特化するのは ChatGPT に追加学習しないといけないので、ChatGPT だけではできない。補完的なニーズがある。

[GPT-4 以降，英語が最強のプログラミング言語になりつつある状況をまじめに考えてみる．｜落合陽一｜ note](https://note.com/ochyai/n/n594b96588560)

API なら Fine-tuning もできる。

入力を加工するためのライブラリとして、Embedding や LangChain がある。

GPT くらいになると AI かどうかはそこまで重要ではない。
相手の特徴、できることを理解して、相手の理解度を把握するのが大事。

GPT の精度が低かったら「条件や手順を整理してくれ」って命令して確認した方が良さそう。

[【完全保存版】GPT を特定の目的に特化させて扱う (Fine-tuning, Prompt, Index, etc.) - Qiita](https://qiita.com/tmgauss/items/22c4e5e00282a23e569d)

GPT 自体にプロンプトを作ってもらう
「〜したいです。どのようなプロンプトを投げればいいですか？」

目的や仮説を投げてから「まずは理解するために質問して」「話を膨らませるためのトピックを教えて」と広げていく。

OpenAI 公式の事例。
[GitHub - openai/openai-cookbook: Examples and guides for using the OpenAI API](https://github.com/openai/openai-cookbook)

[Prompt Engineering Guide 日本語版](https://www.promptingguide.ai/jp)

GPT で BNF 表記を使うアイデア
https://twitter.com/awakia/status/1641798554623819777
