import React, { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Route, useLocation, useHistory } from 'react-router-dom';
import * as Loadable from '@/components/App/Loadable';
import routerPath from '@/libraries/routerPath';
import Menu from '@/components/Menu';
import 'semantic-ui-css/semantic.min.css';

const Comps = [
  // { path: routerPath.HOME, Comp: Loadable.Home, exact: true },
  { path: routerPath.MUSIC_PLAYER, Comp: Loadable.MusicPlayer },
  { path: routerPath.VEDIO_BROWSER, Comp: Loadable.VedioBrowser },
  { path: routerPath.ANIMA_SLIDER, Comp: Loadable.AnimaSlider },
  { path: routerPath.IG_FILTER, Comp: Loadable.IGFilter },
  { path: routerPath.SNAKE_GAME, Comp: Loadable.SnakeGame },
  { path: routerPath.JIGSAW_GAME, Comp: Loadable.JigsawGame },
  { path: routerPath.DINO_GAME, Comp: Loadable.DinoGame },
  { path: routerPath.MATCHING_GAME, Comp: Loadable.MatchingGame },
  { path: routerPath.COUNTDOWN, Comp: Loadable.Countdown },
  { path: routerPath.DRAWING, Comp: Loadable.Drawing },
  { path: routerPath.PACMAN_GAME, Comp: Loadable.PacManGame },
  { path: routerPath.CSS_FILTERS, Comp: Loadable.CssFilters },
  { path: routerPath.POKEDEX, Comp: Loadable.Pokedex },
];

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const history = useHistory();
  const { pathname, search } = useLocation();

  const pathClassname = useMemo(
    () => `path-${pathname.substring(1) || 'home'}`,
    [pathname]
  );

  const onScrollDown = useCallback((isDown) => {
    setIsScrollDown(isDown);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    const pathParser = search?.substring(1).split('path=');
    const isRedirectPathExisted = pathParser?.length === 2;
    if (isRedirectPathExisted) {
      const redirectPath = pathParser[1];
      history.push(redirectPath);
    }
  }, [search]);

  return (
    <div
      className={clsx('app', {
        lite: !isDarkTheme,
        [pathClassname]: true,
      })}
    >
      <Menu
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        isScrollDown={isScrollDown}
      />
      <div className='content'>
        <Route path={routerPath.HOME} exact={true}>
          <Loadable.Home onScrollDown={onScrollDown} />
        </Route>
        {Comps.map(({ path, Comp, exact = false }) => (
          <Route key={path} path={path} exact={exact}>
            <Comp />
          </Route>
        ))}
      </div>
    </div>
  );
};

export default App;
