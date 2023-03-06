import React, { useCallback, useRef, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import {
  pipeHorizontal,
  pipeVertical,
  pipeCorner1,
  pipeCorner2,
  pipeCorner3,
  pipeCorner4,
  block,
  capLeft,
  capRight,
  capBottom,
  capTop,
  pipeCross,
  pipeConnectorTop,
  pipeConnectorRight,
  pipeConnectorBottom,
  pipeConnectorLeft,
} from './assets';
import { isMobile } from '@/libraries/variable';
import { getRandomInt } from '@/libraries/utils';

const canvasW = isMobile ? 280 : 440;
const canvasH = isMobile ? 280 : 440;
const circleObjectRadius = 12;
const circleObjectVelocity = 10;
const boundarySize = 40;
const candyRadius = 3;
const oppositeDirectionEnum = {
  ArrowDown: 'ArrowUp',
  ArrowUp: 'ArrowDown',
  ArrowRight: 'ArrowLeft',
  ArrowLeft: 'ArrowRight',
};
const drectionConfig = [
  {
    direction: 'ArrowDown',
    velocityX: 0,
    velocityY: circleObjectVelocity,
  },
  {
    direction: 'ArrowUp',
    velocityX: 0,
    velocityY: -circleObjectVelocity,
  },
  {
    direction: 'ArrowRight',
    velocityX: circleObjectVelocity,
    velocityY: 0,
  },
  {
    direction: 'ArrowLeft',
    velocityX: -circleObjectVelocity,
    velocityY: 0,
  },
];
const initPacMan = { x: 60, y: isMobile ? 100 : 60 };
const initGhost = isMobile
  ? [
      {
        x: 220,
        y: 100,
        fillStyle: 'pink',
        direction: 'ArrowDown',
      },
    ]
  : [
      {
        x: 380,
        y: 60,
        fillStyle: 'pink',
        direction: 'ArrowDown',
      },
      { x: 60, y: 380, fillStyle: 'orange', direction: 'ArrowUp' },
      {
        x: 380,
        y: 380,
        fillStyle: 'skyblue',
        direction: 'ArrowLeft',
      },
    ];

const mapImageEnum = {
  '-': pipeHorizontal,
  '|': pipeVertical,
  1: pipeCorner1,
  2: pipeCorner2,
  3: pipeCorner3,
  4: pipeCorner4,
  b: block,
  '[': capLeft,
  ']': capRight,
  _: capBottom,
  '^': capTop,
  '+': pipeCross,
  5: pipeConnectorTop,
  6: pipeConnectorRight,
  7: pipeConnectorBottom,
  8: pipeConnectorLeft,
};
const map = isMobile
  ? [
      ['1', '-', '-', '-', '-', '-', '2'],
      ['|', '_', '.', '.', '.', '_', '|'],
      ['|', '.', '.', '^', '.', '.', '|'],
      ['|', '.', '[', '+', ']', '.', '|'],
      ['|', '.', '.', '_', '.', '.', '|'],
      ['|', '^', '.', '.', '.', '^', '|'],
      ['4', '-', '-', '-', '-', '-', '3'],
    ]
  : [
      ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
      ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
      ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
      ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
      ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
      ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
      ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
      ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
      ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
      ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
      // ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
      // ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
      ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3'],
    ];
const candyAmount = map.reduce(
  (acc, row) => acc + row.filter((col) => col === '.').length,
  0
);

const PacManGame = () => {
  const canvasRef = useRef(null);
  const mapUpdatedTimerId = useRef(null);
  const pacmanPostion = useRef(initPacMan);
  const ghostPosition = useRef(initGhost);
  const pacmanDirection = useRef(null);
  const touchingCandies = useRef([]);
  const [score, setScore] = useState(0);

  const drawCircle = useCallback(({ fillStyle, x, y, r }) => {
    const ctx = canvasRef.current?.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }, []);

  const drawPacMan = useCallback(() => {
    drawCircle({
      fillStyle: 'yellow',
      x: pacmanPostion.current.x,
      y: pacmanPostion.current.y,
      r: circleObjectRadius,
    });
  }, [drawCircle]);

  const drawCandy = useCallback(
    ({ x, y }) => {
      drawCircle({
        fillStyle: 'white',
        x,
        y,
        r: candyRadius,
      });
    },
    [drawCircle]
  );

  const drawGhost = useCallback(() => {
    ghostPosition.current.forEach(({ x, y, fillStyle }) => {
      drawCircle({
        fillStyle,
        x,
        y,
        r: circleObjectRadius,
      });
    });
  }, [drawCircle]);

  // 檢查物件是否碰撞磚塊，計算是否整個進入磚塊框內
  const getIsBoundaryCollide = useCallback((x, y) => {
    return map.some((row, rowIndex) => {
      return row.some((col, colIndex) => {
        const imagePath = mapImageEnum[col];
        const imagePositionX = boundarySize * colIndex;
        const imagePositionY = boundarySize * rowIndex;
        return (
          imagePath &&
          x + circleObjectRadius > imagePositionX && // 往左撞到磚塊
          x - circleObjectRadius < imagePositionX + boundarySize && // 往右撞到磚塊
          y + circleObjectRadius > imagePositionY && // 往下撞到磚塊
          y - circleObjectRadius < imagePositionY + boundarySize // 往上撞到磚塊
        );
      });
    });
  }, []);

  // 檢查小精靈是否碰撞 candy
  const checkTouchingCandy = useCallback(() => {
    const { x: pacManX, y: pacManY } = pacmanPostion.current;
    // 精靈正在移動
    if (pacmanDirection.current) {
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
      for (const rowIndex of map.keys()) {
        const row = map[rowIndex];
        for (const colIndex of row.keys()) {
          const col = row[colIndex];
          const candyPositionX = boundarySize * colIndex + boundarySize / 2;
          const candyPositionY = boundarySize * rowIndex + boundarySize / 2;
          if (
            col === '.' &&
            !touchingCandies.current.includes(`${rowIndex}-${colIndex}`) &&
            pacManX + circleObjectRadius > candyPositionX && // 精靈往左撞到 candy
            pacManX - circleObjectRadius < candyPositionX + candyRadius && // 精靈往右撞到 candy
            pacManY + circleObjectRadius > candyPositionY && // 精靈往下撞到 candy
            pacManY - circleObjectRadius < candyPositionY + candyRadius // 精靈往上撞到 candy
          ) {
            touchingCandies.current = [
              ...touchingCandies.current,
              `${rowIndex}-${colIndex}`,
            ];
            setScore((preState) => preState + 10);
            return;
          }
        }
      }
      if (touchingCandies.current.length === candyAmount) {
        Swal.fire({
          icon: 'success',
          title: 'You Win!!',
          text: 'Press Restart To Play Again',
        });
        clearInterval(mapUpdatedTimerId.current);
      }
    }
  }, []);

  // 點擊方向鍵後，讓小精靈前進，更新其座標位置
  const updatePacManPosition = useCallback(() => {
    const { x: originX, y: originY } = pacmanPostion.current;
    const direction = pacmanDirection.current;
    if (direction) {
      const nextPostion = drectionConfig.find(
        (item) => item.direction === direction
      );
      if (nextPostion) {
        const newX = originX + nextPostion.velocityX;
        const newY = originY + nextPostion.velocityY;
        if (!getIsBoundaryCollide(newX, newY)) {
          pacmanPostion.current = { x: newX, y: newY };
        }
      }
    }
  }, [getIsBoundaryCollide]);

  // 繪製地圖
  const drawMap = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    map.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const imagePath = mapImageEnum[col];
        const imagePositionX = boundarySize * colIndex;
        const imagePositionY = boundarySize * rowIndex;
        if (imagePath) {
          const image = new Image(boundarySize, boundarySize);
          image.src = imagePath;
          // 繪製磚塊
          ctx.drawImage(
            image,
            imagePositionX,
            imagePositionY,
            boundarySize,
            boundarySize
          );
        } else if (
          col === '.' &&
          !touchingCandies.current.includes(`${rowIndex}-${colIndex}`)
        ) {
          // 繪製糖果
          drawCandy({
            x: imagePositionX + boundarySize / 2,
            y: imagePositionY + boundarySize / 2,
          });
        }
      });
    });
  }, [drawCandy]);

  // 自動更新鬼移動到新的位置，避免撞牆並且自動轉彎
  const updateGhostPosition = useCallback(() => {
    ghostPosition.current.forEach(
      ({ x: originX, y: originY, direction: originDirection }, ghostIndex) => {
        // 鬼邊移動邊計算下一步要前往的方向，以下邏輯找出所有其他非反向且不會撞牆的方向繼續前進
        const nextPostions = drectionConfig.filter((item) => {
          const newX = originX + item.velocityX;
          const newY = originY + item.velocityY;
          const isOppositeDirection =
            item.direction === oppositeDirectionEnum[originDirection];
          const isCollide = getIsBoundaryCollide(newX, newY);
          // 非反向且不會撞牆
          return !isOppositeDirection && !isCollide;
        });
        // 隨機取得一個索引值，並從上方找出的集合中挑一個，讓鬼前進的方向可以隨機
        const randomIndex = getRandomInt(nextPostions.length);
        const { velocityX, velocityY, ...restConfig } =
          nextPostions[randomIndex];
        const newX = originX + velocityX;
        const newY = originY + velocityY;
        // 更新鬼移動的位置
        ghostPosition.current = ghostPosition.current.map((item, targetIndex) =>
          targetIndex === ghostIndex
            ? { ...item, x: newX, y: newY, ...restConfig }
            : item
        );
      }
    );
  }, [getIsBoundaryCollide]);

  // 檢查小精靈是否碰撞 ghost
  const checkTouchingGhost = useCallback(() => {
    const { x: pacManX, y: pacManY } = pacmanPostion.current;
    const isCollide = ghostPosition.current.some(({ x: ghostX, y: ghostY }) => {
      return (
        pacManX + circleObjectRadius > ghostX && // 精靈往左撞到 ghost
        pacManX - circleObjectRadius < ghostX + circleObjectRadius && // 精靈往右撞到 ghost
        pacManY + circleObjectRadius > ghostY && // 精靈往下撞到 ghost
        pacManY - circleObjectRadius < ghostY + circleObjectRadius // 精靈往上撞到 ghost
      );
    });
    if (isCollide) {
      Swal.fire({
        icon: 'error',
        title: 'Game Over!!',
        text: 'Press Restart To Play Again',
      });
      clearInterval(mapUpdatedTimerId.current);
    }
  }, []);

  const updateMap = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    ctx.clearRect(0, 0, canvasW, canvasH);
    updatePacManPosition();
    drawMap();
    drawPacMan();
    checkTouchingCandy();
    drawGhost();
    updateGhostPosition();
    checkTouchingGhost();
  }, [
    drawMap,
    updatePacManPosition,
    drawPacMan,
    checkTouchingCandy,
    drawGhost,
    updateGhostPosition,
    checkTouchingGhost,
  ]);

  const resetGame = useCallback(() => {
    pacmanPostion.current = initPacMan;
    ghostPosition.current = initGhost;
    pacmanDirection.current = null;
    touchingCandies.current = [];
    setScore(0);

    clearInterval(mapUpdatedTimerId.current);
    mapUpdatedTimerId.current = setInterval(updateMap, 100);
    return () => {
      clearInterval(mapUpdatedTimerId.current);
    };
  }, [updateMap]);

  useEffect(() => {
    resetGame();
    return () => {
      clearInterval(mapUpdatedTimerId.current);
    };
  }, []);

  const onKeyDown = useCallback((e) => {
    pacmanDirection.current = e.key;
  }, []);

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
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className='pacman-game'>
      <div className='tool-bar'>
        {!isMobile && <div>鍵盤方向鍵移動</div>}
        <div className='score'>score {score}</div>
        <button className='mini ui button' onClick={resetGame}>
          restart
        </button>
      </div>
      <canvas
        className='canvas'
        ref={canvasRef}
        width={canvasW}
        height={canvasH}
      />
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
  );
};

export default PacManGame;
