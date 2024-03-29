import React, { useCallback, useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useHistory } from 'react-router-dom';
import pageImgs from './assets/imgs';
import { pageConfig, pageGroups, pageTypes } from '@/libraries/routerPath';
import useDevice from '@/hooks/useDevice';
import { FaStar, FaRegCalendarAlt } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
const year = new Date().getFullYear();

const bannerTextStrs = [
  'Welcome',
  'Hello World',
  'Exciting Ideas',
  'I Love React ＝U＝',
];

const getCardWidthRatio = () => {
  const widthValue = window.innerWidth;
  if (widthValue < 810) {
    if (widthValue < 640) {
      if (widthValue < 520) {
        return 2;
      }
      return 3;
    }
    return 4;
  }
  return 5;
};

const Block = ({ Icon, title, children }) => {
  return (
    <div className='block'>
      {title && (
        <h3 className='ui header'>
          <div className='icon-warpper'>{Icon && <Icon size={24} />}</div>
          <div className='content'>{title}</div>
        </h3>
      )}
      {children}
    </div>
  );
};

const Card = ({ imgName, label, subLabel, path }) => {
  const history = useHistory();

  return (
    <div
      className='card'
      onClick={() => {
        history.push(path);
      }}
    >
      <img src={pageImgs[imgName]} alt='page-img' />
      <div className='label'>
        <span>{label}</span>
      </div>
      <div className='label'>
        <span>{subLabel}</span>
      </div>
    </div>
  );
};

const Home = ({ onScrollDown }) => {
  const [slidesPerView, setSlidesPerView] = useState(() => getCardWidthRatio());
  const [bannerText, setBannerText] = useState(bannerTextStrs[0]);
  const bannerTextStartTimer = useRef(null);
  const bannerTextPauseTimer = useRef(null);
  const bannerTextData = useRef({ index: 0, isAdd: false });
  const history = useHistory();

  const resizeCallback = useCallback(() => {
    setSlidesPerView(getCardWidthRatio());
  }, []);
  const { isMobile } = useDevice({ resizeCallback, widthThreshold: 700 });

  useEffect(() => {
    const onScroll = () => {
      onScrollDown(window.scrollY > 100);
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

  // start to run the banner text
  const runTheBannerText = useCallback(() => {
    if (bannerTextPauseTimer.current) return;

    const { index, isAdd } = bannerTextData.current;
    setBannerText((preState) => {
      const fullText = bannerTextStrs[index];
      const currentTextLength = preState.length;
      if (isAdd) {
        // add a char to the banner text
        if (currentTextLength < fullText.length) {
          return `${preState}${fullText[currentTextLength]}`;
        }
        // the case of text is full, update the status with the case of delete
        else {
          if (index === bannerTextStrs.length - 1) {
            // close the banner text after the last text show
            clearInterval(bannerTextStartTimer.current);
            return preState;
          }
          bannerTextData.current = {
            ...bannerTextData.current,
            isAdd: false,
          };
          if (!bannerTextPauseTimer.current) {
            // run the next banner text after 1 seconds
            bannerTextPauseTimer.current = setTimeout(() => {
              clearTimeout(bannerTextPauseTimer.current);
              bannerTextPauseTimer.current = null;
            }, 1000);
          }
          return preState;
        }
      }
      // the case of delete a char
      else {
        // if there no char can be delete, change the banner text to next index
        if (currentTextLength === 0) {
          const newIndex = index === bannerTextStrs.length - 1 ? 0 : index + 1;
          bannerTextData.current = { index: newIndex, isAdd: true };
          return preState;
        }
        // delete a char
        else if (currentTextLength <= fullText.length) {
          return preState.substring(0, currentTextLength - 1);
        }
      }
    });
  }, []);

  const onIntroModalOpen = useCallback((event, pageIndex) => {
    event.stopPropagation();
    Swal.fire({
      width: '85vw',
      showCloseButton: true,
      showConfirmButton: false,
      html: `<div class='intor-block'><img src=${
        pageImgs[`intro${pageIndex}`]
      } alt='intro-pic'/></div>`,
    });
  }, []);

  const gotoPage = useCallback(
    (event, path) => {
      event.stopPropagation();
      history.push(path);
    },
    [history]
  );

  useEffect(() => {
    bannerTextPauseTimer.current = setTimeout(() => {
      clearTimeout(bannerTextPauseTimer.current);
      bannerTextPauseTimer.current = null;
      bannerTextStartTimer.current = setInterval(runTheBannerText, 120);
    }, 2000);
    return () => {
      clearInterval(bannerTextStartTimer.current);
      clearTimeout(bannerTextPauseTimer.current);
    };
  }, [runTheBannerText]);

  return (
    <div className='home-block'>
      <div className='banner'>
        <div className='title' data-aos='fade-up' data-aos-duration='800'>
          {bannerText}
          <span className='cursor-text'>_</span>
        </div>
        <div className='down-bar'>
          <a href='#main'>
            <RiArrowDownSLine size={55} />
          </a>
        </div>
      </div>
      <div className='main' id='main'>
        <div className={clsx('center', { 's-size': isMobile })}>
          <Block Icon={FaStar} title='all feature'>
            <Swiper
              className='swipers'
              slidesPerView={slidesPerView}
              spaceBetween={15}
              navigation={false}
              loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {pageConfig?.map(({ path, label, subLabel, imgName }) => (
                <SwiperSlide key={path}>
                  <Card
                    imgName={imgName}
                    label={label}
                    subLabel={subLabel}
                    path={path}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Block>
          {pageTypes.map(({ type, Icon: CategoryIcon }) => (
            <Block key={type} title={type} Icon={CategoryIcon}>
              {pageGroups[type]?.map(
                ({ path, Icon, subLabel, imgName, intro, date, pageIndex }) => (
                  <div
                    key={path}
                    className={clsx('item-box', { 's-size': isMobile })}
                    onClick={(event) => {
                      gotoPage(event, path);
                    }}
                  >
                    <div className='left'>
                      <div
                        className='pic'
                        style={{ backgroundImage: `url(${pageImgs[imgName]})` }}
                      />
                    </div>
                    <div className='right'>
                      <div className='title'>
                        {<Icon />}
                        {subLabel}
                      </div>
                      <div className='tags'>
                        <span className='date'>
                          <FaRegCalendarAlt />
                          {date}
                        </span>
                        <span className='type'>
                          <CategoryIcon />
                          {type}
                        </span>
                      </div>
                      <div className='intro'>{intro}</div>
                      {!isMobile && (
                        <div className='btns'>
                          {pageImgs[`intro${pageIndex}`] && (
                            <button
                              className='ui button'
                              onClick={(event) => {
                                onIntroModalOpen(event, pageIndex);
                              }}
                            >
                              介紹
                            </button>
                          )}
                          <button
                            className='ui button'
                            onClick={(event) => {
                              gotoPage(event, path);
                            }}
                          >
                            更多
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </Block>
          ))}
        </div>
      </div>
      <div className='copyright'>
        {`Copyright © ${year} Karen Hong. All rights reserved.`}
      </div>
    </div>
  );
};

export default Home;
