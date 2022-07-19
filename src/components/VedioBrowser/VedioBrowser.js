import React, { useCallback, useState, useEffect, useRef } from 'react';
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
  const timerRef = useRef(null);
  const searchRef = useRef(null);
  const moreDataObserverRef = useRef(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [vedioLoading, setVedioLoading] = useState(false);
  const [isAPIFailed, setIsAPIFailed] = useState(false);
  const [searchValue, setSearchValue] = useState('搖曳露營');
  const [dataSearchValue, setDataSearchValue] = useState(searchValue);
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [currentVedio, setCurrentVedio] = useState(null);

  const onSearchValueChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (query = {}) => {
      const newDataSearchValue = String(query?.q || '').trim();
      if (!searchLoading && !!newDataSearchValue) {
        setSearchLoading(true);
        setDataSearchValue(newDataSearchValue);
        youtubeAPI
          .get('search', {
            params: {
              order: 'viewCount',
              relevanceLanguage: 'zh-TW',
              ...query,
            },
          })
          .then((res) => {
            const newData = res?.data?.items || [];
            if (query?.pageToken) {
              setData((preData) => [...preData, ...newData]);
            } else {
              setData(newData);
            }
            setNextPageToken(res?.data?.nextPageToken);
            setIsAPIFailed(false);
          })
          .catch((err) => {
            const errMsg = err.response?.data?.error?.message;
            alert(`API failed!\n${errMsg}`);
            setIsAPIFailed(true);
          })
          .finally(() => {
            setSearchLoading(false);
          });
      }
    },
    [searchLoading]
  );

  const onSearchValueDelete = useCallback(() => {
    if (!searchLoading) {
      setSearchValue('');
      searchRef.current.focus();
    }
  }, [searchLoading]);

  const onSearchValueKeyDown = useCallback(
    (e) => {
      const isEnter = e.keyCode === 13;
      if (isEnter) {
        onSubmit({ q: searchValue });
      }
    },
    [onSubmit, searchValue]
  );

  const onKeywordClick = useCallback(
    (keyword) => {
      setSearchValue(keyword);
      onSubmit({ q: keyword });
    },
    [onSubmit]
  );

  const getVedioRef = useCallback(
    (node) => {
      if (node) {
        const isLastVedio =
          node.getAttribute('data-vedio-index') === String(data.length - 1);
        if (isLastVedio) {
          moreDataObserverRef.current?.disconnect();
          moreDataObserverRef.current = new IntersectionObserver(
            (entry) => {
              if (entry[0].isIntersecting && !isAPIFailed) {
                timerRef.current = setTimeout(() => {
                  onSubmit({ q: dataSearchValue, pageToken: nextPageToken });
                }, 600);
              }
            },
            { threshold: 1, rootMargin: '0px 0px -70px 0px' }
          );
          moreDataObserverRef.current?.observe(node);
        }
      }

      return null;
    },
    [data, onSubmit, dataSearchValue, nextPageToken, isAPIFailed]
  );

  useEffect(() => {
    onSubmit({ q: searchValue });
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className='vedio-browser'>
      <div className='search-bar'>
        <div className='ui action input left icon fluid'>
          <i className='search icon' />
          <input
            ref={searchRef}
            type='text'
            placeholder='Search...'
            value={searchValue}
            onChange={onSearchValueChange}
            onKeyDown={onSearchValueKeyDown}
            autoFocus
          />
          <i
            className='times circle outline icon closed'
            onClick={onSearchValueDelete}
          />
          <button
            className={clsx('ui icon button', {
              loading: searchLoading,
              disabled: searchLoading,
            })}
            onClick={() => {
              onSubmit({ q: searchValue });
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
        {data?.map((item, index) => (
          <div
            ref={getVedioRef}
            data-vedio-index={index}
            className='item'
            key={`vedio-${index}`}
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
            <div className='tooltip'>{item?.snippet?.title}</div>
          </div>
        ))}
      </div>
      <Loader />
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
