import React from 'react';
import groundImg from './assets/img/ground.png';
import cactusImg from './assets/img/cactus.png';

const DinoGame = () => {
  return (
    <div className='dino-game'>
      <div className='ground-wrapper'>
        <img src={groundImg} alt='ground' className='ground'></img>
        <img src={groundImg} alt='ground' className='ground'></img>
      </div>
      <img src={cactusImg} alt='cactus' className='cactus'></img>
    </div>
  );
};

export default DinoGame;
