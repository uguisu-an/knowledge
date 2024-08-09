# TinkerPop Concept

まずは主要な５つの概念がある。

1. Graph
2. Element
   1. Vertex (V): 頂点
   2. Edge (E): 結合
3. Property: 属性

Elementには、id, label, propertyをつけられる。
idは識別用、labelは分類用の特別な属性。

Edgeには向きがある。

`(A) -> [Edge] -> (B)`

上記のようになっている時、Edgeから見てAがin, Bがoutの方向。
AをEdgeのSource, BをEdgeのTargetという。

TinkerPop自体は３つの階層でできている。

1. Gremlin Server
2. Gremlin Traversal Language
3. Core API

- OLAP: グラフ分析
- OLTP: グラフデータベース
