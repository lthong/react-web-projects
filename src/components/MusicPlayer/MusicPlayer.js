import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { AiFillPlayCircle, AiOutlinePause } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import assets from './assets';
import { getTime } from './utils';

const songs = Object.values(assets);

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPause, setIsPause] = useState(true);
  const [progressTime, setProgressTime] = useState('');
  const [durationTime, setDurationTime] = useState('');
  const [audioAtts, setAudioAtts] = useState({ currentTime: 0, duration: 0 });
  const audioRef = useRef(new Audio(assets[currentSong]?.song));

  const onPreIconClick = useCallback(() => {
    setCurrentSong((preState) => {
      const currentIndex = songs.findIndex((item) => item.key === preState);
      const newIndex =
        currentIndex - 1 < 0 ? songs.length - 1 : currentIndex - 1;
      return songs[newIndex].key;
    });
  }, []);

  const onStartIconClick = useCallback(() => {
    if (!currentSong) {
      setCurrentSong(songs[0].key);
    } else {
      setIsPause(false);
      audioRef.current.play();
    }
  }, [currentSong]);

  const onPauseIconClick = useCallback(() => {
    setIsPause(true);
    audioRef.current.pause();
  }, []);

  const onNextIconClick = useCallback(() => {
    setCurrentSong((preState) => {
      const currentIndex = songs.findIndex((item) => item.key === preState);
      const newIndex = currentIndex + 1 >= songs.length ? 0 : currentIndex + 1;
      return songs[newIndex].key;
    });
  }, []);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.play();
      setIsPause((preState) => (preState ? false : preState));
    }
  }, [currentSong]);

  const onTimeUpdate = useCallback((e) => {
    const { currentTime, duration } = e.target;
    const newCurrentTime = getTime(currentTime);
    const newDurationTime = getTime(duration);
    setAudioAtts(e.target);
    setProgressTime(newCurrentTime);
    setDurationTime(newDurationTime);
  }, []);

  const onProgressChange = useCallback((e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
  }, []);

  return (
    <div className='music-player'>
      <div className='songs'>
        {songs.map((item) => {
          const { key, name, photo } = item;
          const active = currentSong === key;
          return (
            <div
              key={key}
              className={clsx('box', { active })}
              onClick={() => {
                setCurrentSong(key);
              }}
            >
              <div className='photo'>
                <img src={photo} alt={name} />
              </div>
              <div className='intro'>
                <div className='name'>{name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <audio
        className='song-audit'
        ref={audioRef}
        src={assets[currentSong]?.song}
        onEnded={onNextIconClick}
        onTimeUpdate={onTimeUpdate}
        controls
      />
      <div className='bottom-block'>
        <div className='music-control'>
          <BiSkipPrevious
            className='pre-icon'
            size={30}
            onClick={onPreIconClick}
          />
          {isPause ? (
            <AiFillPlayCircle
              className='start-icon'
              size={35}
              onClick={onStartIconClick}
            />
          ) : (
            <AiOutlinePause
              className='pause-icon'
              size={35}
              onClick={onPauseIconClick}
            />
          )}
          <BiSkipNext
            className='next-icon'
            size={30}
            onClick={onNextIconClick}
          />
        </div>
        <div className='progress-bar'>
          <div className='value'>{progressTime}</div>
          <input
            className={clsx('progress-time', { disabled: !currentSong })}
            type='range'
            value={audioAtts.currentTime}
            step='1'
            min='0'
            max={`${audioAtts.duration}`}
            onChange={onProgressChange}
            disabled={!currentSong}
          />
          <div className='value'>{durationTime}</div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
