## 初期設定

```sh
mkdir selenium-example
cd selenium-example
git init
gibo dump Node > .gitignore
npm init -y
npm install selenium-webdriver
```

https://qiita.com/yoshi10321/items/b1be0aded2f3c10ad5d5
ここの例を動かしてみるといい。

## 要素を検索する

```js
await driver.findElement(By.id("username")); // id

await driver.findElement(By.css('button[@value="Hello"]')); // css selector

await driver.findElement(By.xpath('div[text()="Hello"]')); // xpath
```

## 要素の検索を待つ

```js
await driver.wait(until.)
```
