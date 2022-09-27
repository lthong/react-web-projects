export const pieces = Array(4).fill(null);

// https://chupai.github.io/posts/2008/shuffle_algorithm/
// 洗牌演算法：陣列值隨機排序
const shuffle = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i > 0; i -= 1) {
    // Math.random() * max
    // 可以得到介於 0 <= value < max 的隨機值
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};

export const getRandomOriginPiece = () =>
  shuffle(pieces.map((_, i) => i + 1)).reduce(
    (acc, pieceIndex, boxIndex) => ({ ...acc, [boxIndex]: pieceIndex }),
    {}
  );
