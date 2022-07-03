import React, { useCallback, useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import ReactPlayer from 'react-player/youtube';
import Loader from '@/components/Loader';
import youtubeAPI from './ajax';

const quickSearchKeywords = [
  '流行音樂',
  '美食介紹',
  '綜藝節目',
  '旅遊頻道',
  '可愛寵物',
  '居家健身',
  'switch遊戲',
];

const VedioBrowser = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [vedioLoading, setVedioLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('搖曳露營');
  const [data, setData] = useState([]);
  const [currentVedio, setCurrentVedio] = useState(null);

  const onSearchValueChange = useCallback((e) => {
    const value = String(e.target.value)?.trim() || '';
    setSearchValue(value);
  }, []);

  const onSearchValueKeyDown = useCallback(
    (e) => {
      const isEnter = e.keyCode === 13;
      if (isEnter) {
        onSubmit(searchValue);
      }
    },
    [onSubmit, searchValue]
  );

  const submitDisabled = useMemo(
    () => !searchValue || searchLoading,
    [searchValue, searchLoading]
  );

  const onSubmit = useCallback(
    (searchValue) => {
      if (!submitDisabled) {
        setSearchLoading(true);
        youtubeAPI
          .get('search', {
            params: {
              q: searchValue,
              order: 'viewCount',
              relevanceLanguage: 'zh-TW',
            },
          })
          .then((res) => {
            setData(res?.data);
          })
          .catch(() => {
            alert('API failed!');
          })
          .finally(() => {
            setSearchLoading(false);
          });
      }
    },
    [submitDisabled]
  );

  const onSearchValueDelete = useCallback(() => {
    setSearchValue('');
  }, []);

  const onKeywordClick = useCallback(
    (keyword) => {
      setSearchValue(keyword);
      onSubmit(keyword);
    },
    [onSubmit]
  );

  useEffect(() => {
    onSubmit(searchValue);
  }, []);

  return (
    <div className='vedio-browser'>
      <div className='search-bar'>
        <div className='ui action input left icon fluid'>
          <i className='search icon' />
          <input
            type='text'
            placeholder='Search...'
            value={searchValue}
            onChange={onSearchValueChange}
            onKeyDown={onSearchValueKeyDown}
          />
          <i
            className='times circle outline icon closed'
            onClick={onSearchValueDelete}
          />
          <button
            className={clsx('ui icon button', {
              searchLoading,
            })}
            onClick={() => {
              onSubmit(searchValue);
            }}
          >
            搜尋
          </button>
        </div>
        <div className='quick-search'>
          {quickSearchKeywords.map((keyword) => (
            <button
              key={keyword}
              className='keyword ui grey tiny button'
              onClick={() => {
                onKeywordClick(keyword);
              }}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
      <div className='vedio-items'>
        {searchLoading ? (
          <Loader />
        ) : (
          data?.items?.map((item, index) => (
            <div
              className='item'
              key={`${item?.id?.videoId}-${index}`}
              onClick={() => {
                setCurrentVedio(item);
                setVedioLoading(true);
              }}
            >
              <img
                src={item?.snippet?.thumbnails?.medium?.url}
                alt={item?.snippet?.title}
              />
              <div className='title'>{item?.snippet?.title}</div>
            </div>
          ))
        )}
      </div>
      {currentVedio && (
        <div
          className='vedio-modal'
          onClick={(e) => {
            if (e.target.id !== 'vedio-player') {
              setCurrentVedio(null);
            }
          }}
        >
          <div className='vedio-player' id='vedio-player'>
            <i
              className='times circle icon closed'
              onClick={() => {
                setCurrentVedio(null);
              }}
            />
            {vedioLoading && <Loader />}
            {currentVedio?.id?.videoId && (
              <ReactPlayer
                width='100%'
                height='100%'
                style={{ display: vedioLoading ? 'none' : 'block' }}
                url={`https://www.youtube.com/embed/${currentVedio?.id?.videoId}`}
                onReady={() => {
                  setVedioLoading(false);
                }}
                controls
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VedioBrowser;
