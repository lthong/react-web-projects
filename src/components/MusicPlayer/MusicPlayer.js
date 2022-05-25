import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  AiFillFastBackward,
  AiFillFastForward,
  AiOutlineCaretRight,
  AiOutlinePause,
} from 'react-icons/ai';
import assets from './assets';

const songs = Object.values(assets);
const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPause, setIsPause] = useState(true);

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

  return (
    <div className='music-player-block'>
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
        controls
      />
      <div className='bottom-block'>
        <div className='music-control'>
          <AiFillFastBackward
            className='pre-icon'
            size={40}
            onClick={onPreIconClick}
          />
          {isPause ? (
            <AiOutlineCaretRight
              className='start-icon'
              size={40}
              onClick={onStartIconClick}
            />
          ) : (
            <AiOutlinePause
              className='pause-icon'
              size={40}
              onClick={onPauseIconClick}
            />
          )}
          <AiFillFastForward
            className='next-icon'
            size={40}
            onClick={onNextIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
