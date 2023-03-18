import { fromJS } from 'immutable';
import {
  AiFillHome,
  AiFillYoutube,
  AiOutlineClockCircle,
} from 'react-icons/ai';
import { BsMusicNoteBeamed, BsFillCameraFill } from 'react-icons/bs';
import {
  GiSnakeSpiral,
  GiJigsawPiece,
  GiPokerHand,
  GiTicTacToe,
} from 'react-icons/gi';
import {
  FaGamepad,
  FaBookOpen,
  FaPaintBrush,
  FaFolderPlus,
  FaTools,
  FaPaintRoller,
} from 'react-icons/fa';
import { MdCatchingPokemon } from 'react-icons/md';
import { RiGameFill } from 'react-icons/ri';

const pages = {
  HOME: '/',
  MUSIC_PLAYER: '/music-player',
  VEDIO_BROWSER: '/vedio-browser',
  ANIMA_SLIDER: '/anima-slider',
  IG_FILTER: '/ig-filter',
  SNAKE_GAME: '/snake-game',
  JIGSAW_GAME: '/jigsaw-game',
  DINO_GAME: '/dino-game',
  MATCHING_GAME: '/matching-game',
  COUNTDOWN: '/countdown',
  DRAWING: '/drawing',
  PACMAN_GAME: '/pacman-game',
  CSS_FILTERS: '/css-filters',
  POKEDEX: '/pokedex',
  TIC_TAC_TOE_GAME: '/tic-tac-toe-game',
};

export default pages;

export const navs = [
  {
    path: pages.HOME,
    label: 'Home',
    subLabel: '首頁',
    Icon: AiFillHome,
    type: 'page',
  },
  {
    pageIndex: 7,
    path: pages.ANIMA_SLIDER,
    label: 'Animation Slider',
    subLabel: '圖片輪播器',
    Icon: FaBookOpen,
    type: 'service',
    date: '2022-12',
    imgName: 'm7',
    intro:
      '在不使用套件的情況下，自製一個圖片輪播的功能，PC版的輪播框支援拖曳滑動',
  },
  {
    pageIndex: 2,
    path: pages.VEDIO_BROWSER,
    label: 'Vedio Browser',
    subLabel: '影片搜尋瀏覽',
    Icon: AiFillYoutube,
    type: 'service',
    date: '2022-07',
    imgName: 'm2',
    intro:
      '簡易版 Youtube，有支援無限滾動喔！不過因為 API 有每日請求上限，當作一個 demo 就好啦 XD',
  },
  {
    pageIndex: 1,
    path: pages.MUSIC_PLAYER,
    label: 'Music Player',
    subLabel: '音樂播放器',
    Icon: BsMusicNoteBeamed,
    type: 'service',
    date: '2022-06',
    imgName: 'm1',
    intro: '小小的音樂播放器，支援切換曲目，即時顯示目前播放的音軌位置及時間',
  },
  {
    pageIndex: 13,
    path: pages.POKEDEX,
    label: 'Pokedex',
    subLabel: '寶可夢圖鑑',
    Icon: MdCatchingPokemon,
    type: 'service',
    date: '2022-06',
    imgName: 'm13',
    intro:
      '實作寶可夢圖鑑，可查詢寶可夢資訊，並支援中英兩種語言，還可以將喜歡的寶可夢加入最愛喔！',
  },
  {
    pageIndex: 14,
    path: pages.TIC_TAC_TOE_GAME,
    label: 'Tic Tac Toe Game',
    subLabel: '圈圈叉叉',
    Icon: GiTicTacToe,
    type: 'game',
    date: '2023-03',
    imgName: 'm14',
    intro: '經典的圈圈叉叉遊戲，玩的過程還可以反悔棋步喔',
  },
  {
    pageIndex: 11,
    path: pages.PACMAN_GAME,
    label: 'PacMan Game',
    subLabel: '小精靈',
    Icon: RiGameFill,
    type: 'game',
    date: '2023-01',
    imgName: 'm11',
    intro: '經典的小精靈遊戲，吃金幣可以得分！碰到敵人會結束遊戲喔！',
  },
  {
    pageIndex: 6,
    path: pages.DINO_GAME,
    label: 'Dinosaur Game',
    subLabel: 'Google 恐龍',
    Icon: FaGamepad,
    type: 'game',
    date: '2022-12',
    imgName: 'm6',
    intro: '復刻 Google 經典的恐龍遊戲，還有背景音樂喔！',
  },
  {
    pageIndex: 8,
    path: pages.MATCHING_GAME,
    label: 'Matching Game',
    subLabel: '記憶卡牌',
    Icon: GiPokerHand,
    type: 'game',
    date: '2022-12',
    imgName: 'm8',
    intro: '寶可夢的卡牌記憶遊戲，角色牌隨機出現',
  },
  {
    pageIndex: 4,
    path: pages.SNAKE_GAME,
    label: 'Snake Game',
    subLabel: '貪食蛇',
    Icon: GiSnakeSpiral,
    type: 'game',
    date: '2022-09',
    imgName: 'm4',
    intro: '經典的貪吃蛇遊戲，小心不要碰到牆壁與蛇身喔！',
  },
  {
    pageIndex: 5,
    path: pages.JIGSAW_GAME,
    label: 'Jigsaw Game',
    subLabel: '拼圖',
    Icon: GiJigsawPiece,
    type: 'game',
    date: '2022-09',
    imgName: 'm5',
    intro: '要不要玩拼圖～支援桌機與手機的拖拉模式，實作難度五顆心 XD',
  },
  {
    pageIndex: 12,
    path: pages.CSS_FILTERS,
    label: 'CSS Filters',
    subLabel: 'CSS 濾鏡',
    Icon: FaPaintRoller,
    type: 'tool',
    date: '2023-02',
    imgName: 'm12',
    intro:
      '自訂圖片濾鏡效果，並支援下載儲存，範圍包含：灰階, 懷舊, 飽和, 色相旋轉, 負片, 不透明, 亮度, 對比, 模糊, 下拉陰影',
  },
  {
    pageIndex: 9,
    path: pages.COUNTDOWN,
    label: 'Countdown',
    subLabel: '倒數計值器',
    Icon: AiOutlineClockCircle,
    type: 'tool',
    date: '2023-01',
    imgName: 'm9',
    intro:
      '倒數計值器，可自行輸入秒數，使用開始鍵與暫停鍵進行操作，倒數時附有動畫特效',
  },
  {
    pageIndex: 10,
    path: pages.DRAWING,
    label: 'Drawing',
    subLabel: '畫畫板',
    Icon: FaPaintBrush,
    type: 'tool',
    date: '2023-01',
    imgName: 'm10',
    intro: '簡易畫畫板，可更換筆刷顏色、筆刷大小，完成後還可以下載存成圖片喔！',
  },
  {
    pageIndex: 3,
    path: pages.IG_FILTER,
    label: 'IG Filter',
    subLabel: 'IG 濾鏡',
    Icon: BsFillCameraFill,
    type: 'tool',
    date: '2022-07',
    imgName: 'm3',
    intro: '簡易的 IG 濾鏡，可以自己上傳檔案，並支援下載儲存',
  },
];

export const pageConfig = navs.filter(({ path }) => path !== pages.HOME);
export const pageGroups = fromJS(pageConfig)
  .groupBy((item) => item.get('type'))
  .toJS();
export const pageTypes = [
  { type: 'service', Icon: FaFolderPlus },
  { type: 'game', Icon: RiGameFill },
  { type: 'tool', Icon: FaTools },
];
