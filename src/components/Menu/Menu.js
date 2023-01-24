import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaSun, FaMoon, FaReact } from 'react-icons/fa';
import pages, { pageGroups, pageTypes } from '@/libraries/routerPath';
import { homepage } from '../../../package.json';

const NAVS_ID = 'navs';

const Menu = ({ isDarkTheme, setIsDarkTheme, isScrollDown }) => {
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
        if (isMenuOpen) {
          e.stopPropagation();
          onMenuClick();
        }
      }}
    >
      <div
        className={clsx('bar', {
          active: isScrollDown,
        })}
      >
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
            onNavClick(pages.HOME);
            setIsMenuOpen(false);
          }}
        >
          <FaReact size={26} className='react-icon' />
          <span>DEMO</span>
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
      <div
        className='navs'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {pageTypes.map(({ type, Icon }) => (
          <div key={type} className='category'>
            <div className='title'>
              <Icon size={16} />
              <span>{type}</span>
            </div>
            <div className='content-box'>
              {pageGroups[type].map(({ path, subLabel, Icon }) => {
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
                    {subLabel}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
