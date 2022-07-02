import React, { useCallback, useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import ReactPlayer from 'react-player/youtube';
import Loader from '@/components/Loader';
import youtubeAPI from './ajax';

const VedioBrowser = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('SPY x FAMILY');
  const [data, setData] = useState([]);
  const [currentVedio, setCurrentVedio] = useState(null);

  const onSearchValueChange = useCallback((e) => {
    setSearchValue(String(e.target.value)?.trim());
  }, []);

  const submitDisabled = useMemo(
    () => !searchValue || loading,
    [searchValue, loading]
  );

  const onSubmit = useCallback(() => {
    if (!submitDisabled) {
      setLoading(true);
      youtubeAPI
        .get('search', { params: { q: searchValue } })
        .then((res) => {
          setData(res?.data);
        })
        .catch(() => {
          alert('API failed!');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchValue, submitDisabled]);

  useEffect(() => {
    onSubmit();
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
          />
          <button
            className={clsx('ui icon button', {
              loading,
            })}
            onClick={onSubmit}
          >
            搜尋
          </button>
        </div>
      </div>
      <div className='vedio-items'>
        {loading ? (
          <Loader />
        ) : (
          data?.items?.map((item, index) => (
            <div
              className='item'
              key={`${item?.id?.videoId}-${index}`}
              onClick={() => {
                setCurrentVedio(item);
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
            {currentVedio?.id?.videoId && (
              <ReactPlayer
                width='100%'
                url={`https://www.youtube.com/embed/${currentVedio?.id?.videoId}`}
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
