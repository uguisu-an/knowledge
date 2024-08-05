`Warning: Did not expect server HTML to contain a <li> in <ul>.`のような警告は、`<li>`がひとつもない`<ul>`を描画した際に出る警告。
`<tbody>`や`<ol>`でも同じような警告が出る。
描画中にも出るので、データがまだないときは`<ul>`や`<tbody>`あるいは`<table>`ごと、「データがありません」のようなメッセージに置き換えてやれば解消できる。
