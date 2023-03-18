import React from 'react';
import Loadable from 'react-loadable';
import Loader from '@/components/Loader';

const Loading = (props) => {
  if (props.pastDelay) {
    return <Loader />;
  } else {
    return null;
  }
};

export const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ '@/components/Home'),
  loading: Loading,
});
export const MusicPlayer = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'MusicPlayer' */ '@/components/MusicPlayer'),
  loading: Loading,
});
export const VedioBrowser = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'VedioBrowser' */ '@/components/VedioBrowser'),
  loading: Loading,
});
export const IGFilter = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'IGFilter' */ '@/components/IGFilter'),
  loading: Loading,
});
export const SnakeGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'SnakeGame' */ '@/components/SnakeGame'),
  loading: Loading,
});
export const JigsawGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'JigsawGame' */ '@/components/JigsawGame'),
  loading: Loading,
});
export const DinoGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'DinoGame' */ '@/components/DinoGame'),
  loading: Loading,
});
export const AnimaSlider = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'AnimaSlider' */ '@/components/AnimaSlider'),
  loading: Loading,
});
export const MatchingGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'MatchingGame' */ '@/components/MatchingGame'),
  loading: Loading,
});
export const Countdown = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Countdown' */ '@/components/Countdown'),
  loading: Loading,
});
export const Drawing = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Drawing' */ '@/components/Drawing'),
  loading: Loading,
});
export const PacManGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'PacManGame' */ '@/components/PacManGame'),
  loading: Loading,
});
export const CssFilters = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'CssFilters' */ '@/components/CssFilters'),
  loading: Loading,
});
export const Pokedex = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Pokedex' */ '@/components/Pokedex'),
  loading: Loading,
});
export const TicTacToeGame = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'TicTacToeGame' */ '@/components/TicTacToeGame'),
  loading: Loading,
});
