import { AiFillHome, AiFillYoutube } from 'react-icons/ai';
import { BsMusicNoteBeamed, BsFillCameraFill } from 'react-icons/bs';
import { GiSnakeSpiral, GiJigsawPiece } from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa';

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
  },
  {
    path: pages.MUSIC_PLAYER,
    label: 'Music Player',
    Icon: BsMusicNoteBeamed,
  },
  {
    path: pages.VEDIO_BROWSER,
    label: 'Vedio Browser',
    Icon: AiFillYoutube,
  },
  {
    path: pages.IG_FILTER,
    label: 'IG Filter',
    Icon: BsFillCameraFill,
  },
  {
    path: pages.SNAKE_GAME,
    label: 'Snake Game',
    Icon: GiSnakeSpiral,
  },
  {
    path: pages.JIGSAW_GAME,
    label: 'Jigsaw Game',
    Icon: GiJigsawPiece,
  },
  {
    path: pages.DINO_GAME,
    label: 'Dinosaur Game',
    Icon: FaGamepad,
  },
];

export const pageConfig = navs.filter(({ path }) => path !== pages.HOME);
