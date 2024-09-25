Dockerのコンテナからコンテナを操作する方法は主に二つある。
Dockerの上に独立したDockerを持つコンテナを作る方法（dind: docker in docker）
DockerホストのソケットをコンテナにマウントしてDockerホストを操作する方法（dood: docker outside of docker）

CI/CDでよく使われる。
dindの走りとなった開発者はCIでdindが乱用されるべきではないと考えているらしい。Docker本体の開発用。代わりにdoodを使う。

https://blog.nijohando.jp/post/docker-in-docker-docker-outside-of-docker/
