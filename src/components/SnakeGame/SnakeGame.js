import React, { useCallback, useEffect, useRef, useState } from 'react';
import useInterval from '@/hooks/useInterval';

const canvasSize = window.innerWidth < 530 ? 320 : 400;
const sankeSize = 20;
const initSnake = [{ x: canvasSize / 2, y: canvasSize / 2 }];
const initSnakeLength = 6;
const initScore = 0;
const directionEnums = {
  ArrowUp: { x: 0, y: -sankeSize },
  ArrowDown: { x: 0, y: +sankeSize },
  ArrowLeft: { x: -sankeSize, y: 0 },
  ArrowRight: { x: +sankeSize, y: 0 },
};
const initSnakeDirection = 'ArrowUp';
const directionKeys = Object.keys(directionEnums);
const gameStatusEnums = {
  INIT: 'INIT',
  START: 'START',
  PAUSE: 'PAUSE',
  END: 'END',
};

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const snake = useRef(initSnake);
  const snakeDirection = useRef(initSnakeDirection);

  const [snakeLength, setSnakeLength] = useState(initSnakeLength);
  const [score, setScore] = useState(initScore);
  const [gameStatus, setGameStatus] = useState(gameStatusEnums.INIT);

  const resetCanvas = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  }, []);

  const drawSnake = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'lime';
    snake.current.forEach(({ x, y }) => {
      ctx.fillRect(x, y, sankeSize, sankeSize);
    });
  }, []);

  const checkCollide = useCallback(() => {
    const isHitTheWall = Object.values(snake.current[0] || {}).some(
      (item) => item <= 10 || item >= canvasSize - 10
    );

    if (isHitTheWall) {
      setGameStatus(gameStatusEnums.END);
    }
  }, []);

  const setSnake = useCallback(() => {
    const preSnake = snake.current || [];
    const firstBlock = {
      x: preSnake[0].x + directionEnums[snakeDirection.current].x,
      y: preSnake[0].y + directionEnums[snakeDirection.current].y,
    };
    const restBlock = preSnake.filter(
      (_, index) => index !== preSnake.length - 1
    );
    snake.current = [firstBlock, ...restBlock];
  }, []);

  const refreshCanvas = useCallback(() => {
    resetCanvas();
    setSnake();
    drawSnake();
    checkCollide();
  }, [resetCanvas, setSnake, drawSnake, checkCollide]);

  useInterval({
    update: refreshCanvas,
    isStartInterval: gameStatus === gameStatusEnums.START,
  });

  const onKeyDown = useCallback(
    (e) => {
      const keyName = e.key;
      if (
        directionKeys.includes(keyName) &&
        gameStatus === gameStatusEnums.START
      ) {
        snakeDirection.current = keyName;
      }
    },
    [gameStatus]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const onGameStart = useCallback(() => {
    setGameStatus(gameStatusEnums.START);
  }, []);

  const onGamePause = useCallback(() => {
    setGameStatus(gameStatusEnums.PAUSE);
  }, []);

  const onGameReset = useCallback(() => {
    setGameStatus(gameStatusEnums.INIT);
    resetCanvas();
    snake.current = initSnake;
    snakeDirection.current = initSnakeDirection;
    setSnakeLength(initSnakeLength);
    setScore(initScore);
  }, [resetCanvas]);

  useEffect(() => {
    resetCanvas();
  }, []);

  return (
    <div className='snake-game'>
      <div className='map-block'>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      {gameStatus === gameStatusEnums.INIT && (
        <div className='info-block'>Press Start</div>
      )}
      {gameStatus === gameStatusEnums.END && (
        <div className='info-block'>Game Over</div>
      )}
      <div className='btns'>
        {gameStatus !== gameStatusEnums.END &&
          (gameStatus === gameStatusEnums.START ? (
            <button className='ui button' onClick={onGamePause}>
              Pause
            </button>
          ) : (
            <button className='ui button' onClick={onGameStart}>
              Start
            </button>
          ))}
        {gameStatus !== gameStatusEnums.INIT && (
          <button className='ui button' onClick={onGameReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
