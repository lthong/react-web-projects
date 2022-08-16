export const canvasSize = window.innerWidth < 530 ? 320 : 400;
export const sankeSize = 19;
const sankeBoxSize = sankeSize + 1;
const initSnakePosition = canvasSize / 2;
export const initSnakeLength = 3;
export const initScore = 0;
export const directionEnums = {
  ArrowUp: { x: 0, y: -sankeBoxSize, invalidKey: 'ArrowDown' },
  ArrowDown: { x: 0, y: +sankeBoxSize, invalidKey: 'ArrowUp' },
  ArrowLeft: { x: -sankeBoxSize, y: 0, invalidKey: 'ArrowRight' },
  ArrowRight: { x: +sankeBoxSize, y: 0, invalidKey: 'ArrowLeft' },
};
export const initSnakeDirection = 'ArrowUp';
export const directionKeys = Object.keys(directionEnums);
export const gameStatusEnums = {
  INIT: 'INIT',
  START: 'START',
  PAUSE: 'PAUSE',
  END: 'END',
};
export const initSnake = Array(initSnakeLength)
  .fill(null)
  .map((_, i) => {
    const direction = directionEnums[initSnakeDirection];
    return {
      x: initSnakePosition + direction.x * i,
      y: initSnakePosition + direction.y * i,
    };
  });
export const getRandomPosition = () =>
  Math.floor(Math.random() * (canvasSize - 10));
export const initApple = [{ x: getRandomPosition(), y: getRandomPosition() }];
