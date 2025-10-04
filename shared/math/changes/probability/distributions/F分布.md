# Fisher-Snedecor Distribution

$F分布 \Rightarrow 連続確率分布$

$\chi^2$ 分布に従う二つの互いに独立な変数の比

$$
F = \frac{U_1/d_1}{U_2/d_2}
$$

が従う分布。U は確率変数、d は自由度。

t 分布や$\chi^2$分布と同様、自由度によって形が決まる。
自由度を用いて $F(d_1, d_2)$ のように表す。

F 分布の F は統計学者のフィッシャーに由来する。

用途:

- 「母集団の分散や標準偏差が等しい」という仮説の検定（等分散性の検定）
- 分散分析への応用

確率変数 X が F(m, n) に従うとき、

$$
E(X) = \frac{n}{n-2} \quad (n > 2)
$$

$$
V(X) = \frac{2n^2(m + n - 2)}{m(n - 2)^2(n - 4)} \quad (n > 4)
$$

確率変数 $Z \sim N(0, 1)$ と自由度 n の$\chi^2$分布に従う W があり、互いに独立であるとき、

$$t = \frac{Z}{\sqrt{W/n}}$$

t が自由度 n の t 分布に従うとき、$t^2 \sim F(1, n)$ である。

# Reference

- 確率分布
- 連続確率分布
- 自由度
- $\chi^2$分布
- F 検定
- https://ja.wikipedia.org/wiki/F%E5%88%86%E5%B8%83
- https://bellcurve.jp/statistics/course/9929.html
