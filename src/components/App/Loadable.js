import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.pastDelay) {
    return '...Loading';
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
