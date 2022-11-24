import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';
import { AiFillPlayCircle, AiOutlinePause } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import Loader from '@/components/Loader';
import assets from './assets';
import { getTimeFormat } from './utils';

const songs = Object.values(assets);

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(songs[0].key);
  const [isPause, setIsPause] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(new Audio(assets[currentSong]?.song));

  const onStartIconClick = useCallback(() => {
    if (!audioRef.current.src) {
      audioRef.current.src = assets[currentSong]?.song;
    }
    setIsPause(false);
    audioRef.current.play();
  }, [currentSong]);

  const onPauseIconClick = useCallback(() => {
    setIsPause(true);
    audioRef.current.pause();
  }, []);

  const onPreIconClick = useCallback(() => {
    setLoading(true);
    setIsPause(false);
    setCurrentTime(0);
    setCurrentSong((preState) => {
      const currentIndex = songs.findIndex((item) => item.key === preState);
      const newIndex =
        currentIndex - 1 < 0 ? songs.length - 1 : currentIndex - 1;
      const result = songs[newIndex].key;
      audioRef.current.src = assets[result]?.song;
      audioRef.current.play();
      return result;
    });
  }, []);

  const onNextIconClick = useCallback(() => {
    setLoading(true);
    setIsPause(false);
    setCurrentTime(0);
    setCurrentSong((preState) => {
      const currentIndex = songs.findIndex((item) => item.key === preState);
      const newIndex = currentIndex + 1 >= songs.length ? 0 : currentIndex + 1;
      const result = songs[newIndex].key;
      audioRef.current.src = assets[result]?.song;
      audioRef.current.play();
      return result;
    });
  }, []);

  const onTimeUpdate = useCallback((e) => {
    const { currentTime } = e.target;
    setCurrentTime(currentTime);
  }, []);

  const onDurationChange = useCallback((e) => {
    const { duration } = e.target;
    setDuration(duration);
  }, []);

  const onProgressChange = useCallback((e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  }, []);

  // onCanPlayThrough will be trigger after user chagnes a song
  const onCanPlayThrough = useCallback(() => {
    setLoading(false);
  }, []);

  const onSongChagne = useCallback(
    (key) => () => {
      setIsPause(false);
      if (currentSong !== key) {
        // select the other song
        setLoading(true);
        setCurrentTime(0);
        setCurrentSong(key);
        audioRef.current.src = assets[key]?.song;
        audioRef.current.play();
      }
    },
    [currentSong]
  );

  return (
    <div className='music-player'>
      <div className='songs'>
        {songs.map((item) => {
          const { key, name, photo } = item;
          const active = !isPause && currentSong === key;
          return (
            <div
              key={key}
              className={clsx('box', { active })}
              onClick={onSongChagne(key)}
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
        // the " audioRef.current.play() " has some error with ios browser when selecting another song,
        // we will replace below syntax with " audioRef.current.src='xxx' " to resolve this issue
        // src={assets[currentSong]?.song}
        onCanPlayThrough={onCanPlayThrough}
        onTimeUpdate={onTimeUpdate}
        onDurationChange={onDurationChange}
        onEnded={onNextIconClick}
        preload='auto'
        muted={false}
        controls
      />
      <div className='bottom-block'>
        {loading ? (
          <div className='loading-block'>
            <Loader />
          </div>
        ) : (
          <>
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
              <div className='value'>{getTimeFormat(currentTime)}</div>
              <input
                className={clsx('progress-time', {
                  disabled: loading || !currentSong,
                })}
                type='range'
                value={currentTime}
                step='1'
                min='0'
                max={duration}
                onChange={onProgressChange}
                disabled={!currentSong}
              />
              <div className='value'>{getTimeFormat(duration)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
