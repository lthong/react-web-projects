import { AiFillHome, AiFillYoutube } from 'react-icons/ai';
import { BsMusicNoteBeamed, BsFillCameraFill } from 'react-icons/bs';
import { GiSnakeSpiral, GiJigsawPiece } from 'react-icons/gi';
import { FaGamepad, FaBookOpen } from 'react-icons/fa';
import { fromJS } from 'immutable';

const pages = {
  HOME: '/',
  MUSIC_PLAYER: '/music-player',
  VEDIO_BROWSER: '/vedio-browser',
  ANIMA_SLIDER: '/anima-slider',
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
    path: pages.VEDIO_BROWSER,
    label: 'Vedio Browser',
    Icon: AiFillYoutube,
    type: 'service',
    date: '2022-07',
    imgName: 'm2',
    intro:
      '簡易版 Youtube，有支援無限滾動喔！不過因為 API 有每日請求上限，當作一個 demo 就好啦 XD',
  },
  {
    path: pages.ANIMA_SLIDER,
    label: 'Animation Slider',
    Icon: FaBookOpen,
    type: 'service',
    date: '2022-12',
    imgName: 'm7',
    intro: '在不使用套件的情況下，自製一個圖片輪播的功能～實作難度六顆心 XD，',
  },
  {
    path: pages.MUSIC_PLAYER,
    label: 'Music Player',
    Icon: BsMusicNoteBeamed,
    type: 'service',
    date: '2022-06',
    imgName: 'm1',
    intro: '小小的音樂播放器，支援切換曲目，即時顯示目前播放的音軌位置及時間',
  },
  {
    path: pages.IG_FILTER,
    label: 'IG Filter',
    Icon: BsFillCameraFill,
    type: 'tool',
    date: '2022-07',
    imgName: 'm3',
    intro: '簡易的 IG 濾鏡，可以自己上傳檔案，並支援下載儲存',
  },
  {
    path: pages.SNAKE_GAME,
    label: 'Snake Game',
    Icon: GiSnakeSpiral,
    type: 'game',
    date: '2022-09',
    imgName: 'm4',
    intro: '經典的貪吃蛇遊戲，小心不要碰到牆壁與蛇身喔！',
  },
  {
    path: pages.JIGSAW_GAME,
    label: 'Jigsaw Game',
    Icon: GiJigsawPiece,
    type: 'game',
    date: '2022-09',
    imgName: 'm5',
    intro: '要不要玩拼圖～支援桌機與手機的拖拉模式，實作難度五顆心 XD',
  },
  {
    path: pages.DINO_GAME,
    label: 'Dinosaur Game',
    Icon: FaGamepad,
    type: 'game',
    date: '2022-11',
    imgName: 'm6',
    intro: '復刻 Google 經典的恐龍遊戲，還有背景音樂喔！',
  },
];

export const pageConfig = navs.filter(({ path }) => path !== pages.HOME);
export const pageGroups = fromJS(pageConfig)
  .groupBy((item) => item.get('type'))
  .toJS();
