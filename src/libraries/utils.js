// getRandomInt(3)=> Expected output: 0, 1 or 2
// Math.random()=> Expected output: a number from 0 to <1
export const getRandomInt = (max) => {
  // 函數 Math.random() 會回傳一個偽隨機小數 (pseudo-random) 介於 0 到 1 之間(包含 0，不包含 1)
  // Math.random() * max 可以得到介於 0 <= value < max 的隨機值
  return Math.floor(Math.random() * max);
};

// https://chupai.github.io/posts/2008/shuffle_algorithm/
// 洗牌演算法：陣列值隨機排序
export const shuffle = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i > 0; i -= 1) {
    const rand = getRandomInt(i + 1);
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};
