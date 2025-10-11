# Four Keys

DORA の提唱する Four Keys
https://speakerdeck.com/yigarashi/30fen-dewakarufour-keysnoji-chu-tozhong-yao-xing

1. 変更のリードタイム: 変更をコミットしてから本番環境へリリースするまでにかかる時間が短いほどよい
2. デプロイ頻度: 本番環境へのリリース頻度が高いほどよい
3. 変更失敗率: 意図通り動かないコードをリリースする割合が低いほどよい
4. 平均修復時間: 障害から復旧するまでの時間が短いほどよい

1,2 はスループット、3,4 は安定性なのでトレードオフを持っているが、研究において見つかったハイパフォーマーは 4 項目全てで抜きん出ていた。

https://zenn.dev/loglass/articles/28c565a875e9bd
https://speakerdeck.com/isanasan/introduction-to-state-of-devops-and-four-keys-for-visualizing-productivity-in-development-organizations-expanded-and-revised-edition?slide=43
