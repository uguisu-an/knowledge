Kubernetes

saml2aws で認証しているなら kubectl の前に `saml2aws login` を実行する。

コンテキストを確認するコマンド:
`kubectl config current-context`

AWS EKS で動いている Kubernetes でコンテキストを切り替えるコマンド:
`aws eks --profile {profile} --region {region} update-kubeconfig --name {context-name}`

Kubernetesを学ぶロードマップ
https://roadmap.sh/kubernetes
