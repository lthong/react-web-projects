import React, { useCallback, useState } from 'react';
import jigsawImgs from './assets/imgs';
import { pieces, getRandomOriginPiece } from './utils';

const JigsawGame = () => {
  const [originPiece, setOriginPiece] = useState(getRandomOriginPiece());
  const [targetPiece, setTargetPiece] = useState({});
  const [currentDragPieceData, setCurrentDragPieceData] = useState({});
  const [jigsawIndex, setJigsawIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);

  const changeJigsaw = useCallback(() => {
    setJigsawIndex((preState) =>
      preState + 1 >= jigsawImgs.length ? 0 : preState + 1
    );
    setOriginPiece(getRandomOriginPiece());
    setTargetPiece({});
  }, []);

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
          {pieces.map((_, index) => (
            // box為放置拼圖的框框
            <div
              key={`originPiece-${index}`}
              className='box'
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
                  style={{ backgroundImage: `url(${jigsawImgs[jigsawIndex]})` }}
                  onDrag={(e) => {
                    e.preventDefault();
                    setCurrentDragPieceData({
                      boxIndex: index,
                      pieceIndex: originPiece[index],
                      type: 'origin',
                    });
                  }}
                  // onMouseMove={(e) => {
                  // const touchLocation = e.targetTouches[0];
                  // console.log(touchLocation);
                  // }}
                  draggable
                />
              )}
            </div>
          ))}
        </div>
        {/* 此區塊為答案區塊 */}
        <div className='jigsaw-block'>
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
        <button className='ui teal button' onClick={onHintOpenChange}>
          提示
        </button>
        <button className='ui green button' onClick={changeJigsaw}>
          下一題
        </button>
        <button className='ui teal button' onClick={onFinish}>
          送出答案
        </button>
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
