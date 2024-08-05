# Spring Batch

バッチ処理のためのフレームワーク。

Spring Batchの概念:

- Job
- Step
- Chunk
- TaskletStep

https://spring.io/projects/spring-batch
https://spring.pleiades.io/spring-batch/reference/

https://terasoluna-batch.github.io/guideline/5.0.0.RELEASE/ja/Ch02_SpringBatchArchitecture.html
https://spring.pleiades.io/spring-batch/reference/spring-batch-architecture.html

Spring BatchのChunkは入力、加工、出力の定型処理に対して、必要なItemReader, ItemProcessor, ItemWriterを用意する。データベースから読み取るとか簡単なものはあらかじめ用意されたオブジェクトを使える。
入力、加工、出力の定型に当てはまらない処理はTaskletにする。
ChunkやTaskletはStepのモデル。Jobは複数のStepから構成される。

batch:flow.batch:step.batch:tasklet.beanとbean.propertyでクラスとプロパティを指定する。

batch:flow.batch:step.batch:nextで次のbatch:stepを指定する。

listenerはjobやstepの前後に処理を設定する。chunkやitemにも使える。

beanやpropertyはSpring共通のコンテキスト定義の書き方。
