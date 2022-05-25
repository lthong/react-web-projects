import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Loadable from '@/components/App/Loadable';
import routerPath from '@/libraries/routerPath';
import Menu from '@/components/Menu';

const Comps = [
  { path: routerPath.HOME, Comp: Loadable.Home, exact: true },
  { path: routerPath.MUSIC_PLAYER, Comp: Loadable.MusicPlayer },
];

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <div className='app'>
        <Menu />
        <div className='content'>
          {Comps.map(({ path, Comp, exact = false }) => (
            <Route key={path} path={path} exact={exact}>
              <Comp />
            </Route>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
