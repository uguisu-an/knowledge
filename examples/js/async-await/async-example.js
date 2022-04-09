async function asyncExample() {
  return 1;
}

function promiseExample() {
  return new Promise((resolve) => {
    resolve(2);
  });
}

async function main() {
  // 順序が保証される
  console.log(await asyncExample());
  console.log(await promiseExample());

  // 順序が保証されない
  asyncExample().then((n) => {
    console.log(n);
  });
  promiseExample().then((n) => {
    console.log(n);
  });

  // Promiseとして拡張してからawait
  console.log(await asyncExample().then((n) => n * 3));
}

main();
