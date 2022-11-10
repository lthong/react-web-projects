import { AiFillHome, AiFillYoutube } from 'react-icons/ai';
import { BsMusicNoteBeamed, BsFillCameraFill } from 'react-icons/bs';
import { GiSnakeSpiral, GiJigsawPiece } from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa';
import { fromJS } from 'immutable';

const pages = {
  HOME: '/',
  MUSIC_PLAYER: '/music-player',
  VEDIO_BROWSER: '/vedio-browser',
  IG_FILTER: '/ig-filter',
  SNAKE_GAME: '/snake-game',
  JIGSAW_GAME: '/jigsaw-game',
  DINO_GAME: '/dino-game',
};

export default pages;

export const navs = [
  {
    path: pages.HOME,
    label: 'Home',
    Icon: AiFillHome,
    type: 'page',
  },
  {
    path: pages.MUSIC_PLAYER,
    label: 'Music Player',
    Icon: BsMusicNoteBeamed,
    type: 'service',
    imgName: 'm1',
  },
  {
    path: pages.VEDIO_BROWSER,
    label: 'Vedio Browser',
    Icon: AiFillYoutube,
    type: 'service',
    imgName: 'm2',
  },
  {
    path: pages.IG_FILTER,
    label: 'IG Filter',
    Icon: BsFillCameraFill,
    type: 'tool',
    imgName: 'm3',
  },
  {
    path: pages.SNAKE_GAME,
    label: 'Snake Game',
    Icon: GiSnakeSpiral,
    type: 'game',
    imgName: 'm4',
  },
  {
    path: pages.JIGSAW_GAME,
    label: 'Jigsaw Game',
    Icon: GiJigsawPiece,
    type: 'game',
    imgName: 'm5',
  },
  {
    path: pages.DINO_GAME,
    label: 'Dinosaur Game',
    Icon: FaGamepad,
    type: 'game',
    imgName: 'm6',
  },
];

export const pageConfig = navs.filter(({ path }) => path !== pages.HOME);
export const pageGroups = fromJS(pageConfig)
  .groupBy((item) => item.get('type'))
  .toJS();
