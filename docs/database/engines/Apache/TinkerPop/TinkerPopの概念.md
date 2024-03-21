# TinkerPop Concept

まずは主要な３つの概念がある。

1. Vertices (V): 頂点
2. Edges (E): 結合
3. Properties: 属性

VerticesやEdgesには、Labelで検索用のタグをつけられる。

Verticesには、Idで識別子をつけられる。

Edgeには向きがある。

(A) -> [Edge] -> (B)

上記のようになっている時、Edgeから見てAがin, Bがoutの方向。
AをEdgeのSource, BをEdgeのTargetという。

TinkerPop自体は３つの階層でできている。

1. Gremlin Server
2. Gremlin Traversal Language
3. Core API

- OLAP: グラフ分析
- OLTP: グラフデータベース
