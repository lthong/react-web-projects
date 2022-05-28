import React, { useState } from 'react';
import clsx from 'clsx';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Loadable from '@/components/App/Loadable';
import routerPath from '@/libraries/routerPath';
import Menu from '@/components/Menu';

const Comps = [
  { path: routerPath.HOME, Comp: Loadable.Home, exact: true },
  { path: routerPath.MUSIC_PLAYER, Comp: Loadable.MusicPlayer },
];

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <div className={clsx('app', { lite: !isDarkTheme })}>
        <Menu isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
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
