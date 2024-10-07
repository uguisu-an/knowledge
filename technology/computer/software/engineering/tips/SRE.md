# Site Reliability Engineering: SRE

サイトの信頼性をエンジニアリングする。

サイトの信頼性というのは、サイトを信頼して、依存できること。
具体的には、サイトが改善されていって、止まらずに、止まってもすぐに復旧すること。

これをスケールしても続けられるように工学的に解決する。
具体的には、監視ツールを導入したり、ビルドやテストを自動化したり、デプロイを自動化したり、ロードバランシングしたりする。

SREはインフラを扱う人をチームとしてまとめた方がいい。
チームごとにそれぞれインフラを触ってると一貫性がなくなるし、大きなインフラを扱うのは大仕事なのでそもそもチームで当たるべきだ。
開発者はインフラの専門家でない場合も多いので、開発チームにインフラ担当がいても仕事を共有できない。

開発者がインフラを楽に扱えるようにする方向で支援するSREができると効率的。

Kubernetesとか使えるだけじゃなくて、サービスを安定させる、信頼性を高めるのが重要。SREという職種はインフラ職の一つの形を定義したと思う。