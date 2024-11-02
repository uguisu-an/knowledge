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
まずはここの例を動かしてみるといい。

## 要素を検索する

```js
element = await driver.findElement(By.id("username")); // id
buttonElement = await driver.findElement(By.css('button[@value="Hello"]')); // css selector
textElement = await driver.findElement(By.xpath('div[text()="Hello"]')); // xpath
```

## 要素の変化を待つ

```js
const element = driver.findElement(By.id("message"));
await driver.wait(until.elementText(element, "Hello world"), 5000);
```

## タイトルが変わるまで待つ

```js
await driver.wait(until.titleIs("New Page"), 5000);
```

## 特定の要素が出現するまで待つ

```js
await driver.wait(until.elementLocated(By.id("message")), 5000);
```

## フォームに入力する

```js
await driver.findElement(By.css("input[name='message']")).sendKeys("Hello world", Key.RETURN);
```
