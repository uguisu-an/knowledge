Kubernetes

saml2aws で認証しているなら kubectl の前に `saml2aws login` を実行する。

コンテキストを確認するコマンド:
`kubectl config current-context`

AWS EKS で動いている Kubernetes でコンテキストを切り替えるコマンド:
`aws eks --profile {profile} --region {region} update-kubeconfig --name {context-name}`

Kubernetesを学ぶロードマップ
https://roadmap.sh/kubernetes

マシンのメモリを最大8GBまで割り当てる設定にしてたけど、実際に立ち上がる時に512MBしか与えられてなくてビルドがこけていたことがあった。
最大だけでなく、最初から割り当てるリソースの設定なんかも注意しておくこと。
