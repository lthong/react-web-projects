import React from 'react';
import '@/stylesheet/app.scss';
import skyImg from '@/assets/start-sky.jpg';

const App = () => {
  return (
    <div className='app'>
      <img className='bg' src={skyImg} alt='start-sky' />
      <h4 className='title'>Hello React!</h4>
    </div>
  );
};

export default App;
