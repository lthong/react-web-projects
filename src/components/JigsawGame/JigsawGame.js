import React, { useCallback, useRef, useState } from 'react';
import jigsawImgs from './assets/imgs';
import { pieces, getRandomOriginPiece } from './utils';
import Button from '@/components/Button';

const JigsawGame = () => {
  const targetBlockRef = useRef(null);
  const [originPiece, setOriginPiece] = useState(getRandomOriginPiece());
  const [targetPiece, setTargetPiece] = useState({});
  const [currentDragPieceData, setCurrentDragPieceData] = useState({});
  const [jigsawIndex, setJigsawIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [currentTouchMovePieceData, setCurrentTouchMovePieceData] = useState(
    {}
  );

  const onReset = useCallback(() => {
    setOriginPiece(getRandomOriginPiece());
    setTargetPiece({});
  }, []);

  const changeJigsaw = useCallback(() => {
    setJigsawIndex((preState) =>
      preState + 1 >= jigsawImgs.length ? 0 : preState + 1
    );
    onReset();
  }, [onReset]);

  const onFinish = useCallback(() => {
    const targetPieceValues = Object.values(targetPiece);
    const isValid =
      targetPieceValues.length > 0 &&
      targetPieceValues.every(
        (pieceIndex, blockIndex) => pieceIndex === Number(blockIndex) + 1
      );
    const resultMsg = isValid ? '恭喜答對！' : '加油！快完成了！';
    alert(resultMsg);
    if (isValid) {
      changeJigsaw();
    }
  }, [targetPiece, changeJigsaw]);

  const onHintOpenChange = useCallback(() => {
    setIsHintOpen((preState) => !preState);
  }, []);

  return (
    <div className='jigsaw-game'>
      <div className='main-block'>
        {/* 此區塊為題目區塊 */}
        <div className='jigsaw-block'>
          {pieces.map((_, index) => {
            const isBoxTouchMoveing =
              currentTouchMovePieceData.isTouchMove &&
              currentTouchMovePieceData.boxIndex === index;
            return (
              // box為放置拼圖的框框
              <React.Fragment key={`originPiece-${index}`}>
                <div
                  className='box'
                  style={
                    isBoxTouchMoveing
                      ? {
                          zIndex: 2,
                          position: 'absolute',
                          // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/clientX
                          // 返回觸點相對於可見視區 (visual viewport) 左邊沿的的 X 坐標
                          left: currentTouchMovePieceData.clientX,
                          top: currentTouchMovePieceData.clientY,
                        }
                      : {}
                  }
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    // box為空拼圖才能被放置
                    if (!originPiece[index]) {
                      if (currentDragPieceData.type !== 'target') {
                        // 移除來源位置的拼圖 (piece from origin block)
                        setOriginPiece((preState) => ({
                          ...preState,
                          [currentDragPieceData.boxIndex]: null,
                        }));
                      } else {
                        // 移除來源位置的拼圖 (piece from target block)
                        setTargetPiece((preState) => ({
                          ...preState,
                          [currentDragPieceData.boxIndex]: null,
                        }));
                      }

                      // 放置新的拼圖
                      setOriginPiece((preState) => ({
                        ...preState,
                        [index]: currentDragPieceData.pieceIndex,
                      }));
                    }
                  }}
                >
                  {originPiece[index] && (
                    // 拼圖圖層可拖曳
                    <div
                      className={`piece order-${originPiece[index]}`}
                      style={{
                        backgroundImage: `url(${jigsawImgs[jigsawIndex]})`,
                      }}
                      // 桌機拖拉事件
                      onDrag={(e) => {
                        e.preventDefault();
                        setCurrentDragPieceData({
                          boxIndex: index,
                          pieceIndex: originPiece[index],
                          type: 'origin',
                        });
                      }}
                      // 手機拖拉事件
                      onTouchMove={(e) => {
                        // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch_events
                        // https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/targetTouches
                        // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch
                        e.preventDefault();
                        const touchLocation = e.targetTouches[0];
                        const { width, height } =
                          touchLocation.target.getBoundingClientRect();
                        setCurrentTouchMovePieceData({
                          isTouchMove: true,
                          clientX: touchLocation.clientX - width / 2,
                          clientY: touchLocation.clientY - height - 30,
                          boxIndex: index,
                          pieceIndex: originPiece[index],
                          type: 'origin',
                        });
                      }}
                      // 手機拖拉事件
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
                        // https://zh.javascript.info/size-and-scroll
                        const {
                          left: dragElL,
                          right: dragElR,
                          top: dragElT,
                          bottom: dragElB,
                        } = e.target.getBoundingClientRect();
                        const {
                          left: dropElL,
                          right: dropElR,
                          top: dropElT,
                          bottom: dropElB,
                          width: dropElW,
                          height: dropElH,
                        } = targetBlockRef.current.getBoundingClientRect();
                        //  目標區塊中心水平高度
                        const hValue = dropElH / 2 + dropElL;
                        //  目標區塊中心垂直高度
                        const vValue = dropElW / 2 + dropElT;
                        // dorp in the target block
                        // +-10 to reduce the difficulty
                        const isDropOnTheTargetBlock =
                          dragElT >= dropElT - 10 &&
                          dragElB <= dropElB + 10 &&
                          dragElL >= dropElL - 10 &&
                          dragElR <= dropElR + 10;
                        if (isDropOnTheTargetBlock) {
                          const { boxIndex, pieceIndex } =
                            currentTouchMovePieceData;
                          let dropBoxIndex = null;
                          if (
                            dragElB <= vValue + 10 &&
                            dragElR <= hValue + 10
                          ) {
                            dropBoxIndex = 0;
                          } else if (
                            dragElB < vValue + 10 &&
                            dragElL > hValue - 10
                          ) {
                            dropBoxIndex = 1;
                          } else if (
                            dragElT >= vValue - 10 &&
                            dragElR <= hValue + 10
                          ) {
                            dropBoxIndex = 2;
                          } else if (
                            dragElT > vValue - 10 &&
                            dragElL > hValue - 10
                          ) {
                            dropBoxIndex = 3;
                          }
                          if (typeof dropBoxIndex === 'number') {
                            setOriginPiece((preState) => {
                              const buffer = { ...preState };
                              delete buffer[boxIndex];
                              return buffer;
                            });
                            setTargetPiece((preState) =>
                              preState[dropBoxIndex]
                                ? preState
                                : { ...preState, [dropBoxIndex]: pieceIndex }
                            );
                          }
                        }
                        setCurrentTouchMovePieceData({
                          isTouchMove: false,
                        });
                      }}
                      draggable
                    />
                  )}
                </div>
                {/* the div is a placeholder to prevent the board broken */}
                {isBoxTouchMoveing && <div className='box' />}
              </React.Fragment>
            );
          })}
        </div>
        {/* 此區塊為答案區塊 */}
        <div className='jigsaw-block' ref={targetBlockRef}>
          {pieces.map((_, index) => (
            <div
              key={`targetPiece-${index}`}
              className='box'
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (!targetPiece[index]) {
                  if (currentDragPieceData.type !== 'target') {
                    // 移除來源位置的拼圖 (piece from origin block)
                    setOriginPiece((preState) => ({
                      ...preState,
                      [currentDragPieceData.boxIndex]: null,
                    }));
                  } else {
                    // 移除來源位置的拼圖 (piece from target block)
                    setTargetPiece((preState) => ({
                      ...preState,
                      [currentDragPieceData.boxIndex]: null,
                    }));
                  }

                  // 放置新的拼圖
                  setTargetPiece((preState) => ({
                    ...preState,
                    [index]: currentDragPieceData.pieceIndex,
                  }));
                }
              }}
            >
              {targetPiece[index] && (
                <div
                  className={`target order-${targetPiece[index]}`}
                  style={{ backgroundImage: `url(${jigsawImgs[jigsawIndex]})` }}
                  onDrag={(e) => {
                    e.preventDefault();
                    setCurrentDragPieceData({
                      boxIndex: index,
                      pieceIndex: targetPiece[index],
                      type: 'target',
                    });
                  }}
                  draggable
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='actions'>
        <Button bgColor='orange' onClick={onHintOpenChange}>
          提示
        </Button>
        <Button bgColor='blue' onClick={onReset}>
          重來
        </Button>
        <Button bgColor='green' onClick={changeJigsaw}>
          換題
        </Button>
        <Button bgColor='teal' onClick={onFinish}>
          完成
        </Button>
      </div>
      {isHintOpen && (
        <div
          className='hint-modal'
          onClick={(e) => {
            if (e.target.id !== 'hint-img') {
              setIsHintOpen(false);
            }
          }}
        >
          <img src={jigsawImgs[jigsawIndex]} alt='hint' id='hint-img' />
        </div>
      )}
    </div>
  );
};

export default JigsawGame;
