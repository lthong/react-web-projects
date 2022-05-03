import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerPath from '@/libraries/routerPath';
import Menu from '@/components/Menu';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <div className='app'>
        <Menu />
        <Route exact path={routerPath.HOME}></Route>
        <Route path={routerPath.MUSIC_PLAYER}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
