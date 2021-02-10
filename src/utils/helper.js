export const add = (nums) => nums.reduce((sum, num) => (sum += num), 0);

// asyncFunEx can test the webpack config setting of 1) useBuiltIns: 'usage' or 2)plugins: ['@babel/plugin-transform-runtime'] is working or not
export const asyncFunEx = () => {
  function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    console.log('a', a);
    const b = await resolveAfter2Seconds(30);
    console.log('b', b);
    return x + a + b;
  }

  add1(10).then((v) => {
    console.log(v); // prints 60 after 4 seconds.
  });
};
