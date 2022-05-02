import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerPath from '@/libraries/routerPath';
import Menu from '@/components/Menu';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <Menu />
      <Route exact path={routerPath.ROOT}>
        <div className='app'></div>
      </Route>
    </BrowserRouter>
  );
};

export default App;
