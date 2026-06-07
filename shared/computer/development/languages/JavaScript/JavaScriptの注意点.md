`Array.prototype.sort()` のデフォルトは文字列比較なので注意すること。
数値比較したいなら、`sort((a, b) => a - b)` のように比較関数を明示するか、lodash の `sortBy` を使うといい。
