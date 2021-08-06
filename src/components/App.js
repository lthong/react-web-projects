import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerPath from '@/libraries/routerPath';
import skyImg from '@/assets/start-sky.jpg';
import '@/stylesheet/app.scss';
// import { asyncFunEx } from '@/utils/helper';
// asyncFunEx();

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <Route exact path={routerPath.ROOT}>
        <div className='app'>
          <img className='bg' src={skyImg} alt='start-sky' />
          <h4 className='title'>Hello React!</h4>
        </div>
      </Route>
    </BrowserRouter>
  );
};

export default App;
