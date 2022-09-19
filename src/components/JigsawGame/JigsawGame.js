import React, { useCallback, useState } from 'react';
import { FaRandom } from 'react-icons/fa';
import clsx from 'clsx';
import jigsawImgs from './assets/imgs';

const pieces = Array(4).fill(null);

const JigsawGame = () => {
  const [jigsawIndex, setJigsawIndex] = useState(0);
  const [target, setTarget] = useState({});
  const [currentDragIndex, setCurrentDragIndex] = useState(null);

  const changeJigsaw = useCallback(() => {
    setJigsawIndex((preState) =>
      preState + 1 >= jigsawImgs.length ? 0 : preState + 1
    );
    setTarget({});
  }, []);

  return (
    <div className='jigsaw-game'>
      <FaRandom className='change-bg-icon' onClick={changeJigsaw} />
      <div className='main-block'>
        <div className='jigsaw-block'>
          {pieces.map((_, index) => (
            <div key={`piece-${index}`} className='box'>
              <div
                className={clsx(`piece order-${index + 1}`)}
                style={{ backgroundImage: `url(${jigsawImgs[jigsawIndex]})` }}
                onDrag={(e) => {
                  e.preventDefault();
                  setCurrentDragIndex(index);
                }}
                draggable
              ></div>
            </div>
          ))}
        </div>
        <div className='jigsaw-block'>
          {pieces.map((_, index) => (
            <div
              key={`target-${index}`}
              className='box'
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                setTarget((preState) => ({
                  ...preState,
                  [index]: (
                    <div
                      className={clsx(`piece order-${currentDragIndex + 1}`)}
                      style={{
                        backgroundImage: `url(${jigsawImgs[jigsawIndex]})`,
                      }}
                    />
                  ),
                }));
              }}
            >
              {target[index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JigsawGame;
