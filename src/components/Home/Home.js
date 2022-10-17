import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import pageImgs from './assets/imgs';
import { pageConfig } from '@/libraries/routerPath';
import { isMobile } from '@/libraries/variable';

const Home = ({ onScrollDown }) => {
  const history = useHistory();

  useEffect(() => {
    const onScroll = () => {
      onScrollDown(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      onScrollDown(false);
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScrollDown]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className='home-block'>
      <div className='bg'>
        <div className='title'>Welcome To My Website</div>
      </div>
      <div className='ui four column doubling stackable grid container'>
        {pageConfig.map(({ path, Icon, label }, i) => (
          <div key={path} className='column'>
            <div
              className={clsx('ui link card', { 'small-size': isMobile })}
              onClick={() => {
                history.push(path);
              }}
            >
              <img src={pageImgs[`${isMobile ? 'm' : 'd'}${i + 1}`]} />
              <div className='content'>
                <div className='header title'>
                  <Icon size={16} className='nav-icon' />
                  <div className='label'>{label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
