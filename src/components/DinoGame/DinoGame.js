import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import clsx from 'clsx';
import { groundImg } from './assets/img';
import { cssVars, dinoImgEnums, gameStatusEnums } from './libraries';
import bgm from './assets/music/bgm.mp3';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import { BsArrowUpSquare } from 'react-icons/bs';
import useDevice from '@/hooks/useDevice';

const DinoGame = () => {
  const dinoRunTimerId = useRef(null);
  const dinoJumpUpperTimerId = useRef(null);
  const dinoRef = useRef(null);
  const bgmRef = useRef(null);
  const [dinoImgKey, setDinoImgKey] = useState('init');
  const [gameStatus, setGameStatus] = useState(gameStatusEnums.INIT);
  const [isDinoJumpUpper, setIsDinoJumpUpper] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isBgmOpen, setIsBgmOpen] = useState(false);
  const [score, setScore] = useState(0);
  const { isMobile } = useDevice();

  const clearTimer = useCallback(() => {
    clearInterval(dinoRunTimerId.current);
    clearInterval(dinoJumpUpperTimerId.current);
  }, []);

  const checkCollision = useCallback(() => {
    const dinoEl = dinoRef.current;
    const dinoBottom = parseInt(
      window.getComputedStyle(dinoEl).getPropertyValue('bottom')
    );
    const dinoLeft = parseInt(
      window.getComputedStyle(dinoEl).getPropertyValue('left')
    );
    const dinoRight = dinoLeft + dinoEl.clientWidth - 12;
    const isCollision = [...document.querySelectorAll('.obstacle')].some(
      (obstacle) => {
        const cactusLeft = parseInt(
          window.getComputedStyle(obstacle).getPropertyValue('left')
        );
        const cactusHeight = obstacle.clientHeight;
        return (
          cactusLeft < dinoRight &&
          cactusLeft > dinoLeft &&
          cactusHeight > dinoBottom
        );
      }
    );

    if (isCollision) {
      setDinoImgKey('lose');
      setGameStatus(gameStatusEnums.END);
      clearTimer();
      setIsBgmOpen(false);
    }
  }, [clearTimer]);

  const onStart = useCallback(() => {
    // reset the game
    if (dinoImgKey === 'init') {
      setIsReset(false);
      bgmRef.current.currentTime = 0;
    }
    setIsBgmOpen(true);

    // set the running dino
    dinoRunTimerId.current = setInterval(() => {
      setDinoImgKey((currentState) =>
        currentState === 'run-0' ? 'run-1' : 'run-0'
      );
      checkCollision();
      setScore((preState) => preState + 1);
    }, 100);
    setGameStatus(gameStatusEnums.START);
  }, [checkCollision, dinoImgKey]);

  const onPause = useCallback(() => {
    clearInterval(dinoRunTimerId.current);
    setGameStatus(gameStatusEnums.PAUSE);
    setIsBgmOpen(false);
  }, []);

  const onReset = useCallback(() => {
    setGameStatus(gameStatusEnums.INIT);
    setIsReset(true);
    setDinoImgKey('init');
    setIsDinoJumpUpper(false);
    setScore(0);
  }, []);

  const isStart = useMemo(
    () => gameStatus === gameStatusEnums.START,
    [gameStatus]
  );

  const dinoSrc = useMemo(
    () => dinoImgEnums[isDinoJumpUpper ? 'init' : dinoImgKey],
    [isDinoJumpUpper, dinoImgKey]
  );

  const onJump = useCallback(() => {
    if (isStart && !isDinoJumpUpper) {
      setIsDinoJumpUpper(true);
      dinoJumpUpperTimerId.current = setTimeout(() => {
        setIsDinoJumpUpper(false);
      }, cssVars.dinoJumpingMs);
    }
  }, [isStart, isDinoJumpUpper]);

  const onKeyDown = useCallback(
    (event) => {
      if (
        // [32, 38] is the keyCode of space and upper arrow
        [32, 38].includes(event.keyCode)
      ) {
        onJump();
      }
    },
    [onJump]
  );

  const onBgmStatusChange = useCallback(() => {
    setIsBgmOpen((preState) => !preState);
  }, []);

  useEffect(() => {
    if (isBgmOpen) {
      bgmRef.current.play();
    } else {
      bgmRef.current.pause();
    }
  }, [isBgmOpen]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (
    <div className={clsx('dino-game', { 'm-platform': isMobile })}>
      <div
        className={clsx('container', {
          pause: !isStart,
          reset: isReset,
        })}
        onClick={onJump}
        onTouchStart={onJump}
      >
        <div className='info'>
          {gameStatus === gameStatusEnums.INIT &&
            (isMobile ? (
              'Touch Screen to Jump'
            ) : (
              <>
                Press{' '}
                <button className='ui black basic button space'>SPACE</button>{' '}
                or <BsArrowUpSquare className='info-icon' /> To Jump
              </>
            ))}
          {gameStatus === gameStatusEnums.END && (
            <div className='end-text'>GAME OVER</div>
          )}
        </div>
        <div className='score'>{String(score).padStart(5, '0')}</div>
        <div className='ground-wrapper'>
          <img src={groundImg} alt='ground' className='ground'></img>
          <img src={groundImg} alt='ground' className='ground'></img>
        </div>
        {cssVars.sCactusPosition.map((position) => (
          <div
            key={`cactus-small-${position}`}
            className={`obstacle cactus-small position-${position}`}
          />
        ))}
        {cssVars.lCactusPosition.map((position) => (
          <div
            key={`cactus-large-${position}`}
            className={`obstacle cactus-large position-${position}`}
          />
        ))}
        <div className='cloud type-1' />
        <div className='cloud type-2' />
        <div className='cloud type-3' />
        {dinoImgEnums[dinoImgKey] && (
          <img
            ref={dinoRef}
            className={clsx('dino', {
              'jump-upper': isDinoJumpUpper,
            })}
            src={dinoSrc}
            alt='dino'
          />
        )}
      </div>
      <div className='action-controls'>
        <>
          {gameStatus === gameStatusEnums.END ? (
            <button className='ui green button' onClick={onReset}>
              Reset
            </button>
          ) : (
            <>
              <button
                className='ui blue button'
                disabled={gameStatus === gameStatusEnums.START}
                onClick={onStart}
              >
                Start
              </button>
              <button
                className='ui gray button'
                disabled={gameStatus !== gameStatusEnums.START}
                onClick={onPause}
              >
                Pause
              </button>
            </>
          )}
          <div className='bgm-control'>
            <audio
              className='bgm-audit'
              ref={bgmRef}
              src={bgm}
              muted={!isBgmOpen}
              autoPlay={false}
              loop
              controls
            />
            {gameStatus === gameStatusEnums.START && (
              <div className='bgm-switch' onClick={onBgmStatusChange}>
                <div className='voice-icon'>
                  {isBgmOpen ? <MdMusicNote /> : <MdMusicOff />}
                </div>
                <div className={clsx('bgm-btn', { open: isBgmOpen })}>
                  <div className='switch' />
                </div>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default DinoGame;
