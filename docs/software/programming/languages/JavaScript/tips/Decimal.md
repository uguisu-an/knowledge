# JavaScript Tips: Decimal

js で decimal を扱うライブラリは主に 3 つあり、同じ作者が用途ごとに開発している。

通常は big.js でいい。
精度の低下を抑えたい金融系には bignumber.js を使う。
特に小さな、あるいは大きな値を扱う科学系には decimal.js を勧めている。

https://github.com/MikeMcl/big.js/wiki
