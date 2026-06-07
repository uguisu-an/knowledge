# GitHub Actions Tips

## リリースに合わせて実行する

`on.push.tags = ['*']` とすると、ブランチに tag がついた時だけ実行される。
特定のリリースだけ対応したいなら `on.push.tags = ['v*']` でもいい。
