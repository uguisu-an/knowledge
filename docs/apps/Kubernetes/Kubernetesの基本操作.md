設定ファイル`pod.yaml`を作って、`kubectl apply -f pod.yaml`でPodを作る。
`kubectl delete -f pod.yaml`でPodを消す。

`kubectl get pod {pod_name}`でPodの情報を得る。
名前空間に属する時は`kubectl get pod {pod_name} -n {namespace}`にする。他のコマンドでも同じ。
