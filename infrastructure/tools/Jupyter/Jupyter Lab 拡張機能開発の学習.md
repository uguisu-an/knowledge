# Jupyter Lab 拡張機能開発の学習手順

## 学習した順序

Jupyter がどんなものかは知っていたので省略。

最初にまずは開発者ガイドの概要を読んだ。
https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html
どの資料を見ればいいか把握した。

jupyterlab のチュートリアルした。
https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html
拡張機能を読み込んでデバッグする方法がわかった。開発するときは基本的に jlpm watch と jupyter lab を動かしとくのが良さそう。
jupyterlab のプラグインで console.log すると開発ツールの console にそのまま表示される。
ウィジェット（タブ）、コマンド、コマンドパレット、について概要を理解した。

jupyterlab 標準のサービスに何があるか読んだ。CoreTokens の部分を見て、どういうふうに拡張できるか確認。
https://jupyterlab.readthedocs.io/en/stable/extension/extension_points.html
ノートブック周りは INotebookTracker サービスを使いそう。
コマンドパレット以外にランチャー、メインメニュー、ステータスバーなども拡張できる。
Promise 型のプロパティの使い方がわかった。

jupyterlab でよく現れる設計パターンについて読んだ。特にイベントが Signal として実装されている部分が特徴的。
https://jupyterlab.readthedocs.io/en/stable/developer/patterns.html

ファイルの開き方を調べるため、DocumentManager の API を確認して、openOrReveal の動作を確認した。
https://jupyterlab.readthedocs.io/en/stable/api/classes/docmanager.documentmanager-1.html

notebook に介入するようなプラグインを探して、いくつかのパッケージのコードを読んだ。
以下のパッケージで INotebookTracker.widgetAdded や KernelConnector.ready に当たりをつける。
https://github.com/lckr/jupyterlab-variableInspector

既存の jupyter notebook のコードを読んで、notebook/js/outputarea を検索する。@jupyterlab/outputarea を見つける。@jupyterlab/notebook から使えそう。
https://stackleap.io/js/@jupyterlab/outputarea

"jupyterlab outputarea"で検索して、以下の記事で notebook から output へのアクセス方法を調べる。
INotebookTracker の tracker.widgetAdded で widget を受け取って、widget.content.model が INotebookModel 型になっている。さらに notebook.cells.changed で cell の変更や実行を取れそう。
https://discourse.jupyter.org/t/how-to-get-output-model-for-a-given-cell-in-a-jupyterlab-extension/11342/4

動かしてみて、INotebookModel の cells.changed で取ってきた ICellModel の contentChanged や stateChanged で内容の変更や実行が拾えるのを確認した。
cells.changed のコールバックの第二引数の change.type で"add"だったらセルの追加、"remove"だったらセルの削除になっているのを確認した。

output を取得するために CodeCell を判別したくて@jupyterlab/nbformat を調べた。
モジュールの API のところで、モジュールから公開されている関数やインタフェースなどは確認できる。
https://jupyterlab.readthedocs.io/en/stable/api/modules.html
@jupyterlab/cells の isCodeCellModel と ICodeCellModel を使うほうが良さそう。

outputarea の HTML 要素を確認する。ボタンを置きたい部分の名称は OutputPrompt になっている。

## プラグインとパッケージ

jupyterlab extension は、jupyterlab plugin をまとめたパッケージ。
https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html

プラグインが基本単位。
まずプラグインを作成して、それを拡張機能としてパッケージングする。

## プラグイン

> アプリケーションプラグインは、いくつかのメタデータフィールドを持つ JavaScript オブジェクトです。
>
> https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html

## ISignal と Promise

Promise が返ってくるイベントを拾っても内部的に非同期されているようで、実行タイミングが安定しない。
例えば、NotebookPanel の revealed を拾うと、セルの初期化が前になったり後になったりした。

ISignal が返ってくるイベントを優先して使う。

## セルの初期化を拾う

INotebookModel の cells.changed は、セルの追加や削除を拾える。
IChangeArgs<ICellModel>の type が"add"だったら追加だし、"remove"だったら削除。

Notebook を開いた時の最初の初期化処理でも add が発行される。

追加・削除されたセルは newValues に入っている。

## セルの変更を拾う

ICellModel の contentChanged は、input area の編集を拾える。

ICellModel の stateChanged は、属性の変更を拾える。
executionCount や isDirty の更新など。
name にどの属性が変更されたか入っている。

## セルの編集を禁止する

cell の metadata に `{ "editable": false }` を設定するとそのセルは編集できなくなる。

## セルの削除を禁止する

cell の metadata に `{ "deletable": false }` を設定するとそのセルは削除できなくなる。

## Notebook と Console

Notebook と Console (Code Console)は似たような動きをする。
どちらも Cell 単位で内容を扱う。
両方に対応するプラグインもある。

## IFuture（未検証）

OutputArea の future プロパティが IShellFuture になっているので、IFuture を扱うのと同じように処理をフックできるかも。
どっかに介入して IExecuteRequestMsg に registerMessageHook できれば、セルのメタデータなどを判定して処理をキャンセルできるか。
ただ、Kernel に差し込む場合はその後の処理が全部止まるかも。message ごとに止まるならいけるか？

sessionContext と KernelConnector も実行制御に使えるか？

## その他

拡張機能のデバッグはビルドしたものを読み込んだ方がいい。
ソースを読み込むのは jupyterlab 自体の再ビルドが必要になるので手間がかかる。

> ビルド済みの拡張機能の開発は、変更を確認するために JupyterLab を再構築する必要がないため、通常ははるかに簡単です。
>
> https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html

NotebookActions を使って実行のイベントを扱っている拡張機能
https://github.com/mwakaba2/jupyterlab-notifications

セルの実行を実装している拡張機能
https://github.com/epi2me-labs/jupyterlab-autorun-cells
