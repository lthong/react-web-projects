import React, { useCallback, useEffect, useRef, useState } from 'react';

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
const directionKeys = Object.keys(directionEnums);
const gameStatusEnums = {
  INIT: 'INIT',
  START: 'START',
  PAUSE: 'PAUSE',
  END: 'END',
};

let preTimestamp = null;

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const [snake, setSnake] = useState(initSnake);
  const [snakeLength, setSnakeLength] = useState(initSnakeLength);
  const [snakeDirection, setSnakeDirection] = useState(directionEnums.ArrowUp);
  const [score, setScore] = useState(initScore);
  const [gameStatus, setGameStatus] = useState(gameStatusEnums.INIT);

  const resetCanvas = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  }, []);

  const drawSnake = useCallback((newSnake) => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'lime';
    newSnake.forEach(({ x, y }) => {
      ctx.fillRect(x, y, sankeSize, sankeSize);
    });
  }, []);

  const checkCollide = useCallback((newSnake) => {
    const isHitTheWall = Object.values(newSnake[0] || {}).some(
      (item) => item <= 10 || item >= canvasSize - 10
    );

    if (isHitTheWall) {
      setGameStatus(gameStatusEnums.END);
      clearInterval(intervalRef.current);
    }
  }, []);

  const getNewSnake = useCallback(
    (preSanke) => {
      const firstBlock = {
        x: preSanke[0].x + snakeDirection.x,
        y: preSanke[0].y + snakeDirection.y,
      };
      const restBlock = preSanke.filter(
        (_, index) => index !== preSanke.length - 1
      );
      return [firstBlock, ...restBlock];
    },
    [snakeDirection]
  );

  const refreshCanvas = useCallback(() => {
    setSnake((preSnake) => {
      const newSnake = getNewSnake(preSnake);
      drawSnake(newSnake);
      checkCollide(newSnake);
      return newSnake;
    });
  }, [getNewSnake, drawSnake, checkCollide]);

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(refreshCanvas, 200);
  }, [refreshCanvas]);

  const onKeyDown = useCallback(
    (e) => {
      const keyName = e.key;
      if (
        directionKeys.includes(keyName) &&
        gameStatus === gameStatusEnums.START
      ) {
        setSnakeDirection(directionEnums[keyName]);
        resetInterval();
      }
    },
    [resetInterval, gameStatus]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const onGameStart = useCallback(() => {
    setGameStatus(gameStatusEnums.START);
    resetInterval();
  }, [resetInterval]);

  const onGamePause = useCallback(() => {
    setGameStatus(gameStatusEnums.PAUSE);
    clearInterval(intervalRef.current);
  }, []);

  const onGameReset = useCallback(() => {
    setGameStatus(gameStatusEnums.INIT);
    clearInterval(intervalRef.current);
    resetCanvas();
    setSnake(initSnake);
    setSnakeLength(initSnakeLength);
    setSnakeDirection(directionEnums.ArrowUp);
    setScore(initScore);
  }, [resetCanvas]);

  useEffect(() => {
    resetCanvas();
    return () => {
      clearInterval(intervalRef.current);
    };
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
