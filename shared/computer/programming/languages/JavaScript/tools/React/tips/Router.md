React の Router 使うときはコンポーネントを lazy と Suspense で読み込む。

Next.jsの場合、getInitialPropsで取得することもできるけど、どっちみちrouter.pushでrouterに依存するので、router.queryで取ってもいいと思う。
単にrouterから取れば`const { page, pageSize, onPageChange, onPageSizeChange } = useRouterPagination()`みたいなまとめ方もできるし。
