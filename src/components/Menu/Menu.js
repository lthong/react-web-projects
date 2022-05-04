import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import routerPath from '@/libraries/routerPath';
import { homepage } from '../../../package.json';

const navIconEnums = {
  [routerPath.MUSIC_PLAYER]: BsMusicNoteBeamed,
};
const navs = [
  {
    path: routerPath.MUSIC_PLAYER,
    label: 'Music Player',
  },
];

const Menu = () => {
  const history = useHistory();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = useCallback(() => {
    setIsMenuOpen((preState) => !preState);
  }, []);

  const onNavClick = useCallback(
    (path) => {
      history.push(path);
    },
    [history]
  );

  return (
    <div className='menu'>
      <div className='bar'>
        <div className='left-items'>
          <div
            className={clsx('menu-icon', { active: isMenuOpen })}
            onClick={onMenuClick}
          >
            <div className='mid'></div>
          </div>
        </div>
        <div
          className='title'
          onClick={() => {
            onNavClick(routerPath.HOME);
            setIsMenuOpen(false);
          }}
        >
          React Projects
        </div>
        <div className='right-items'>
          <AiOutlineGithub
            className='github-icon'
            size={30}
            onClick={() => {
              window.location.replace(homepage);
            }}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className='navs'>
          {navs.map(({ path, label }) => {
            const IconComp = navIconEnums[path];
            const active = location.pathname === path;
            return (
              <div
                key={path}
                className={clsx('item', { active })}
                onClick={() => onNavClick(path)}
              >
                <IconComp size={20} className='nav-icon' />
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
