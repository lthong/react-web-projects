import { isMobile } from '@/libraries/variable';

// 畫布長寬
export const canvasSize = isMobile ? 260 : 360;

// 畫布元件長寬
export const boxSize = 19;

// 蛇長寬＋含邊界
const sankeBoxSize = boxSize + 1;

// 地圖邊界
const mapLimit = canvasSize - sankeBoxSize;

export const getIsHitTheWall = ({ x, y }) => {
  return x < 0 || y < 0 || x > mapLimit || y > mapLimit;
};
// 分數初始值
export const initScore = 0;

// 方向設定
export const directionEnums = {
  ArrowUp: { x: 0, y: -sankeBoxSize, invalidKey: 'ArrowDown' },
  ArrowDown: { x: 0, y: +sankeBoxSize, invalidKey: 'ArrowUp' },
  ArrowLeft: { x: -sankeBoxSize, y: 0, invalidKey: 'ArrowRight' },
  ArrowRight: { x: +sankeBoxSize, y: 0, invalidKey: 'ArrowLeft' },
};

// 蛇初始方向
export const initSnakeDirection = 'ArrowUp';

// 方向值集合
export const directionKeys = Object.keys(directionEnums);

// 遊戲狀態
export const gameStatusEnums = {
  INIT: 'INIT',
  START: 'START',
  PAUSE: 'PAUSE',
  END: 'END',
};

const initSnakePosition = canvasSize / 2;
// 蛇初始座標
export const initSnake = Array(3)
  .fill(null)
  .map((_, i) => {
    const direction = directionEnums[initSnakeDirection];
    return {
      x: initSnakePosition + direction.x * i,
      y: initSnakePosition - direction.y * i,
    };
  });

// 隨機座標產生器
const getRandomPosition = () =>
  Math.floor(Math.random() * (canvasSize / 20)) * 20;

// 蘋果產生器
export const getNewApple = (snake) => {
  const apple = { x: getRandomPosition(), y: getRandomPosition() };
  const isOnTheEdge = [apple.x, apple.y].some((v) => [0, mapLimit].includes(v));
  const isColide =
    isOnTheEdge || snake?.some(({ x, y }) => x === apple.x && y === apple.y);
  if (isColide) {
    return getNewApple(snake);
  } else {
    return apple;
  }
};
