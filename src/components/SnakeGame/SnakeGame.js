import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import useInterval from '@/hooks/useInterval';
import {
  canvasSize,
  boxSize,
  getIsHitTheWall,
  initScore,
  directionEnums,
  initSnakeDirection,
  directionKeys,
  gameStatusEnums,
  initSnake,
  getNewApple,
} from './libraries';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import { ImArrowDown } from 'react-icons/im';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const snake = useRef(initSnake);
  const snakeDirection = useRef(initSnakeDirection);
  const apple = useRef(getNewApple(initSnake));
  const [score, setScore] = useState(initScore);
  const [gameStatus, setGameStatus] = useState(gameStatusEnums.INIT);

  // 重置畫布
  const resetCanvas = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  }, []);

  // 繪製蛇身
  const drawSnake = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'lime';
    snake.current.forEach(({ x, y }) => {
      ctx.fillRect(x, y, boxSize, boxSize);
    });
  }, []);

  // 繪製蘋果
  const drawApple = useCallback(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.current.x, apple.current.y, boxSize, boxSize);
  }, []);

  // 取得下一個蛇頭座標
  const getSnakeNewBody = useCallback(() => {
    const firstBody = snake.current[0];
    const newBody = {
      x: firstBody.x + directionEnums[snakeDirection.current].x,
      y: firstBody.y + directionEnums[snakeDirection.current].y,
    };
    return newBody;
  }, []);

  // 檢查碰撞：蛇頭是否吃到蘋果＆蛇頭是否撞到牆壁或蛇身
  const checkCollide = useCallback(() => {
    const { x: snakeHeadX, y: snakeHeadY } = snake.current[0];
    const isHitTheWall = getIsHitTheWall({ x: snakeHeadX, y: snakeHeadY });
    const isHitSnakeBody = snake.current.some(
      ({ x: otherX, y: otherY }, index) =>
        index !== 0 && snakeHeadX === otherX && snakeHeadY === otherY
    );
    if (isHitTheWall || isHitSnakeBody) {
      // 蛇頭撞到牆壁或蛇身則遊戲結束
      setGameStatus(gameStatusEnums.END);
    }

    const isEattingApple =
      snakeHeadX === apple.current.x && snakeHeadY === apple.current.y;
    if (isEattingApple) {
      // 吃到蘋果則分數加一＆蛇身增加一格＆重新放置蘋果
      setScore((preState) => preState + 1);
      const newBody = getSnakeNewBody();
      const newSanke = [newBody, ...snake.current];
      snake.current = newSanke;
      apple.current = getNewApple(newSanke);
    }
  }, [getSnakeNewBody]);

  // 把蛇頭增加一格，蛇尾去掉一格，透過座標不斷改變來達到蛇身前進
  const setSnake = useCallback(() => {
    const newBody = getSnakeNewBody();
    const preBody = snake.current.filter(
      (_, i) => i !== snake.current.length - 1
    );
    snake.current = [newBody, ...preBody];
  }, [getSnakeNewBody]);

  // 每次 interval 執行的動作
  const refreshCanvas = useCallback(() => {
    resetCanvas();
    setSnake();
    drawApple();
    drawSnake();
    checkCollide();
  }, [resetCanvas, setSnake, drawSnake, drawApple, checkCollide]);

  const isStart = useMemo(
    () => gameStatus === gameStatusEnums.START,
    [gameStatus]
  );

  // 透過遊戲狀態控制 interval, 遊戲為開始才 setInterval
  useInterval({
    update: refreshCanvas,
    delay: 150,
    isStartInterval: isStart,
  });

  const onKeyDown = useCallback(
    (e) => {
      const keyName = e.key;
      if (
        directionKeys.includes(keyName) &&
        isStart &&
        directionEnums[snakeDirection.current].invalidKey !== keyName
      ) {
        snakeDirection.current = keyName;
      }
    },
    [isStart]
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

  // 重置遊戲：畫布＆蛇＆蘋果＆蛇身方向＆分數 設為初始值
  const onGameReset = useCallback(() => {
    setGameStatus(gameStatusEnums.INIT);
    resetCanvas();
    snake.current = initSnake;
    apple.current = getNewApple(initSnake);
    snakeDirection.current = initSnakeDirection;
    setScore(initScore);
  }, [resetCanvas]);

  const onDownClick = useCallback(() => {
    onKeyDown({ key: 'ArrowDown' });
  }, [onKeyDown]);

  const onLeftClick = useCallback(() => {
    onKeyDown({ key: 'ArrowLeft' });
  }, [onKeyDown]);

  const onRightClick = useCallback(() => {
    onKeyDown({ key: 'ArrowRight' });
  }, [onKeyDown]);

  const onUpClick = useCallback(() => {
    onKeyDown({ key: 'ArrowUp' });
  }, [onKeyDown]);

  useEffect(() => {
    resetCanvas();
    drawSnake();
  }, []);

  return (
    <div className='snake-game'>
      <div className='map-block'>
        <div className='top-info'>
          {gameStatus === gameStatusEnums.START && (
            <div>鍵盤方向鍵控制移動</div>
          )}
          <div className='score'>Score {score}</div>
        </div>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
        <div className='status-btns'>
          {gameStatus !== gameStatusEnums.END &&
            (gameStatus === gameStatusEnums.START ? (
              <button className='ui red button' onClick={onGamePause}>
                Pause
              </button>
            ) : (
              <button className='ui green button start' onClick={onGameStart}>
                Start
              </button>
            ))}
          {gameStatus !== gameStatusEnums.INIT && (
            <button className='ui grey button' onClick={onGameReset}>
              Reset
            </button>
          )}
        </div>
        <div className='direction-btns'>
          <button className='ui icon blue button down' onClick={onDownClick}>
            <AiOutlineArrowDown />
          </button>
          <button className='ui icon blue button left' onClick={onLeftClick}>
            <AiOutlineArrowLeft />
          </button>
          <button className='ui icon blue button right' onClick={onRightClick}>
            <AiOutlineArrowRight />
          </button>
          <button className='ui icon blue button up' onClick={onUpClick}>
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
      {gameStatus === gameStatusEnums.INIT && (
        <div className='status-info init'>
          <ImArrowDown className='icon' />
          Press Start
          <ImArrowDown className='icon' />
        </div>
      )}
      {gameStatus === gameStatusEnums.END && (
        <div className='status-info'>Game Over</div>
      )}
    </div>
  );
};

export default SnakeGame;
