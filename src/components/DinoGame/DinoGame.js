import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import groundImg from './assets/img/ground.png';

const DinoGame = () => {
  // const timerId = useRef(null);
  // const cactusSRef = useRef(null);
  // const cactusLRef = useRef(null);
  // const [isCactusLShow, setIsCactusLShow] = useState(true);
  // const [isCactusSShow, setIsCactusSShow] = useState(false);
  // const [cactusObjs, setCactusObjs] = useState(['small']);

  // useEffect(() => {
  //   timerId.current = setInterval(() => {
  //     const cactusLLeft = parseInt(
  //       window.getComputedStyle(cactusLRef.current).getPropertyValue('left')
  //     );
  //     const cactusSLeft = parseInt(
  //       window.getComputedStyle(cactusSRef.current).getPropertyValue('left')
  //     );
  //     console.log('cactusLLeft', cactusLLeft);
  //     console.log('cactusSLeft', cactusSLeft);
  //     if (cactusLLeft < 0) {
  //       setIsCactusSShow(true);
  //       setIsCactusLShow(false);
  //     }
  //     if (cactusSLeft < 0) {
  //       setIsCactusLShow(true);
  //       setIsCactusSShow(false);
  //     }
  //   }, 100);
  //   return () => {
  //     clearInterval(timerId.current);
  //   };
  // }, []);

  return (
    <div className='dino-game'>
      <div className='container'>
        <div className='ground-wrapper'>
          <img src={groundImg} alt='ground' className='ground'></img>
          <img src={groundImg} alt='ground' className='ground'></img>
        </div>
        {/* <div
          ref={cactusSRef}
          className={clsx('object cactus-small', { anima: isCactusSShow })}
        ></div>
        <div
          ref={cactusLRef}
          className={clsx('object cactus-large', { anima: isCactusLShow })}
        ></div> */}
        <div className='object cactus-small a'></div>
        <div className='object cactus-small b'></div>
      </div>
    </div>
  );
};

export default DinoGame;
