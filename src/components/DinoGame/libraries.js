// import variable from './style.scss';
import { dinoRun0, dinoRun1, dinoInit, dinoLose } from './assets/img';

const sCactusPosition = [172];
const lCactusPosition = [119];
const dinoJumpingSecond = 0.5;

export const cssVars = {
  sCactusPosition,
  lCactusPosition,
  dinoJumpingMs: dinoJumpingSecond * 1000,
};

export const dinoImgEnums = {
  'run-0': dinoRun0,
  'run-1': dinoRun1,
  init: dinoInit,
  lose: dinoLose,
};

export const gameStatusEnums = {
  INIT: 'INIT',
  START: 'START',
  PAUSE: 'PAUSE',
  END: 'END',
};
