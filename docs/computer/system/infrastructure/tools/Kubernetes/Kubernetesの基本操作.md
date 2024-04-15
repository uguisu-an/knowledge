## Podを起動・削除する

`kubectl run {pod_name}`で起動して、`kubectl delete pod {pod_name}`で削除する。
引数にPod名を指定して、オプションに--imageを渡すのがdockerとは違うところ。

## Podの情報を得る

`kubectl get pod {pod_name}`でPodの情報を得る。
名前空間に属する時は`kubectl get pod {pod_name} -n {namespace}`にする。他のコマンドでも同じ。

## Podテンプレートを使う

設定ファイル`pod.yaml`を作って、`kubectl apply -f pod.yaml`でPodを作る。
`kubectl delete -f pod.yaml`でPodを消す。

Podの設定ファイルにはURLも指定できる。
