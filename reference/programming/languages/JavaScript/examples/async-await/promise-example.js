const test = () => {
  console.log(1);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    });
  });
};

const main = () => {
  test().then(() => {
    console.log(3);
  });
};

main();
