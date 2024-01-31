next dev で開発用、next start で本番用に起動。

Next で外から設定を与えたいときは next.config.js に設定するか、環境変数が使える。
開発フェイズでしか使わない設定なんかもできる。
ローカルでしか使わないものは.env.local で上書きできる。

Next で publicRuntimeConfig を使うのは非推奨になった。
https://nextjs.org/docs/pages/api-reference/next-config-js/runtime-configuration
