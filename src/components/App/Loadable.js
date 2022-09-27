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
