import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineGithub, AiFillHome, AiFillYoutube } from 'react-icons/ai';
import { BsMusicNoteBeamed, BsFillCameraFill } from 'react-icons/bs';
import { FaSun, FaMoon } from 'react-icons/fa';
// import { SiNintendo3Ds } from 'react-icons/si';
import routerPath from '@/libraries/routerPath';
import { homepage } from '../../../package.json';

const NAVS_ID = 'navs';

const navs = [
  {
    path: routerPath.HOME,
    label: 'Home',
    Icon: AiFillHome,
  },
  {
    path: routerPath.MUSIC_PLAYER,
    label: 'Music Player',
    Icon: BsMusicNoteBeamed,
  },
  {
    path: routerPath.VEDIO_BROWSER,
    label: 'Vedio Browser',
    Icon: AiFillYoutube,
  },
  {
    path: routerPath.IG_FILTER,
    label: 'IG Filter',
    Icon: BsFillCameraFill,
  },
];

const Menu = ({ isDarkTheme, setIsDarkTheme }) => {
  const history = useHistory();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = useCallback(() => {
    setIsMenuOpen((preState) => !preState);
  }, []);

  const onNavClick = useCallback(
    (path) => {
      onMenuClick();
      history.push(path);
    },
    [onMenuClick, history]
  );

  return (
    <div
      className={clsx('menu', { 'navs-open': isMenuOpen })}
      onClick={(e) => {
        if (isMenuOpen && e.target.id !== NAVS_ID) {
          onMenuClick();
        }
      }}
    >
      <div className='bar'>
        <div className='left-items'>
          <div
            className={clsx('menu-icon', { active: isMenuOpen })}
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick();
            }}
          >
            <div className='mid'></div>
          </div>
        </div>
        <div
          className='title'
          onClick={(e) => {
            e.stopPropagation();
            onNavClick(routerPath.HOME);
            setIsMenuOpen(false);
          }}
        >
          React Projects
        </div>
        <div className='right-items'>
          {isDarkTheme ? (
            <FaSun
              className='tool-icon'
              size={25}
              onClick={(e) => {
                e.stopPropagation();
                setIsDarkTheme(false);
              }}
            />
          ) : (
            <FaMoon
              className='tool-icon'
              size={22}
              onClick={(e) => {
                e.stopPropagation();
                setIsDarkTheme(true);
              }}
            />
          )}
          <AiOutlineGithub
            className='tool-icon'
            size={25}
            onClick={() => {
              window.location.replace(homepage);
            }}
          />
        </div>
      </div>
      <div className='navs' id={NAVS_ID}>
        {navs.map(({ path, label, Icon }) => {
          const active = location.pathname === path;
          return (
            <div
              key={path}
              className={clsx('item', { active })}
              onClick={(e) => {
                e.stopPropagation();
                onNavClick(path);
              }}
            >
              <Icon size={20} className='nav-icon' />
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
