Webブラウザを操作するツール。

プログラムから操作することもできる。
PythonやNodeJSが一般的。

ブラウザとバージョンを合わせないといけない。
Docker上で動かすのが簡単。

https://hub.docker.com/u/selenium
https://github.com/SeleniumHQ/docker-selenium

```
docker run -p 4444:4444 selenium/standalone-chrome
```

CPUがARMの場合、`selenium/standalone-chromium`の方がいいみたい。
