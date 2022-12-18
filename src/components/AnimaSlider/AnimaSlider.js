import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';
import Decimal from 'decimal.js';
import { banners, data, referenceLabelEnums } from './enums';
import useDevice from '@/hooks/useDevice';
import { FaBook, FaTh, FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Switch from '@/components/Common/Switch';

const animaAmount = banners.length;
// bannerContainerXVar：輪播匡 translateX 的 css變數名
const bannerContainerXVar = '--anima-slider-banner-container-translate-x';
// bannerWidthRatio：每張輪播圖寬度25%
const bannerWidthRatio = 25;
// bannerLengthInARow：一次可以併排4張（100/25）輪播圖
const bannerLengthInARow = Decimal.div(100, bannerWidthRatio).toNumber();
// bannersLeftLimitRatio：輪播匡往左滑，x值最小值為0，碰到此邊界即無法再往左滑
const bannersLeftLimitRatio = 0;
// bannersLeftLimitRatio：輪播匡往右滑，x值最大值為bannersRightLimitRatio，碰到此邊界即無法再往右滑
// 比如五張圖，x值最右只能是 -25%, 六張則為 -50%, 以此類推，所以才要先扣掉第一頁的四張，再去乘以剩下張數（每張25%）來得出最右可以移動的寬度
const bannersRightLimitRatio =
  (animaAmount - bannerLengthInARow) * -bannerWidthRatio;

const Block = ({ title, Icon, children }) => {
  return (
    <div className='block'>
      <div className='title'>
        <Icon size={22} />
        {title}
      </div>
      {children}
    </div>
  );
};

const AnimaSlider = () => {
  const { isMobile } = useDevice();
  const bannerCarouselTimer = useRef(null);
  const fadeInTimer = useRef(null);
  const [currentAnima, setCurrentAnima] = useState('tadakoi');
  // isBannerMoved：輪播匡是否被觸發滾動
  const [isBannerMoved, setIsBannerMoved] = useState(false);
  // mouseDownX：滑鼠點下的瞬間所在Ｘ軸位置
  const [mouseDownX, setMouseDownX] = useState(null);
  // bannerXRatio：當前輪播匡translateX的距離值（單位是%)
  const [bannerXRatio, setBannerXRatio] = useState(0);
  // bannerMouseMoveDiff：輪播匡內滾動的過程中，滑鼠游標移動的距離，用於即時更新輪播匡 translateX 的相對距離
  const [bannerMouseMoveDiff, setBannerMouseMoveDiff] = useState(null);
  const [isBannerCarouselOpen, setIsBannerCarouselOpen] = useState(false);
  const [isbannerMouseEnter, setIsbannerMouseEnter] = useState(false);
  // currentPicIndex：當前選擇的 gallery pic
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [isFadeIn, setIsFadeIn] = useState(false);
  // currentClickModePicIndex：當前的圖片索引位置
  const [currentSinglePicCarouselIndex, setCurrentClickModePicIndex] =
    useState(0);

  const onBannerClick = useCallback(
    (key) => () => {
      if (!bannerMouseMoveDiff && key !== currentAnima) {
        setIsFadeIn(true);
        clearTimeout(fadeInTimer.current);
        fadeInTimer.current = setTimeout(() => {
          setIsFadeIn(false);
          setCurrentAnima(key);
          setCurrentPicIndex(0);
        }, 500);
      }
      setMouseDownX(null);
      setBannerMouseMoveDiff(null);
    },
    [bannerMouseMoveDiff, currentAnima]
  );

  // 滑鼠點下觸發
  const onBannerContainerMouseDown = useCallback((e) => {
    setIsBannerMoved(false);
    // 輪播圖總數量大於四張才允許滑動輪播匡
    if (animaAmount > bannerLengthInARow) {
      // 記錄當前點擊的X位置
      setMouseDownX(e.clientX);
    }
  }, []);

  // 滑鼠游標移動時觸發
  const onBannerContainerMouseMove = useCallback(
    (e) => {
      if (typeof mouseDownX === 'number') {
        setIsBannerMoved(true);
        // diff：滑鼠移動的距離
        const diff = e.clientX - mouseDownX;
        setBannerMouseMoveDiff(diff);
      }
    },
    [mouseDownX]
  );

  const onBannerContainerMouseUp = useCallback(
    (e) => {
      setIsBannerMoved(false);
      // 如果輪播圖張數大於四張，
      // 且滑鼠一開始按下的位置和最後滑鼠放開的位置不同時，代表不是單純點擊，而有滑動行為，則更新滾動到輪播圖位置
      if (animaAmount > bannerLengthInARow && mouseDownX !== e.clientX) {
        // diff：滑鼠點擊和放開時的距離差，正值代表往左滑，負值代表往右滑
        const diff = e.clientX - mouseDownX;
        // diffWidthRatio：輪播匡整個滑動的距離佔整體寬度的比例
        const diffWidthRatio = Decimal.div(Math.abs(diff), window.innerHeight)
          .mul(100)
          .round()
          .toNumber();
        // widthRatio：用 diffWidthRatio 去換算出和 bannerWidthRatio倍數 中某個最近的一個值，
        // 四捨五入得到，比如結果會得到 25, 50, 75...其中的某個值，
        const widthRatio = Decimal.div(
          diffWidthRatio < bannerWidthRatio ? bannerWidthRatio : diffWidthRatio,
          bannerWidthRatio
        )
          .round()
          .mul(bannerWidthRatio)
          .toNumber();
        // diff > 0 代表往左滑，x值要增加，可以往上加代表x值是負值（一開始是0，往右滑會使x變負數），最多只會加到0為止
        // diff < 0 代表往右滑，x值要減少，最多只能減少到 bannersRightLimitRatio 的邊界值
        const newBannerXRatio =
          diff > 0
            ? bannerXRatio + widthRatio > bannersLeftLimitRatio
              ? bannersLeftLimitRatio
              : bannerXRatio + widthRatio
            : bannerXRatio - widthRatio <= bannersRightLimitRatio
            ? bannersRightLimitRatio
            : bannerXRatio - widthRatio;
        // 設定輪播匡新的x位置
        setBannerXRatio(newBannerXRatio);
        setCurrentClickModePicIndex(
          Decimal.abs(newBannerXRatio).div(25).toNumber()
        );
        document.documentElement.style.setProperty(
          bannerContainerXVar,
          `${newBannerXRatio}%`
        );
      }
    },
    [mouseDownX, bannerXRatio]
  );

  // 桌機版手動拖拉輪播匡，左右滑動的過程
  const bannerContainerStyle = useMemo(() => {
    if (isBannerMoved && typeof bannerMouseMoveDiff === 'number') {
      return {
        transform: `translateX(calc(${bannerMouseMoveDiff}px + ${bannerXRatio}%))`,
        transition: 'none',
      };
    }
    return {};
  }, [isBannerMoved, bannerMouseMoveDiff, bannerXRatio]);

  // 點擊左右切換圖片，更新滑動位置
  const onPreOrNextClick = useCallback(
    // indexUpdatedValue為 -1 表示向左，indexUpdatedValue為 +1 表示向右
    (indexUpdatedValue) => {
      if (
        (indexUpdatedValue === -1 && currentSinglePicCarouselIndex !== 0) ||
        (indexUpdatedValue === +1 &&
          currentSinglePicCarouselIndex !==
            (isMobile ? animaAmount - 2 : animaAmount - 4))
      ) {
        setCurrentClickModePicIndex((preState) => {
          const newState = preState + indexUpdatedValue;
          document.documentElement.style.setProperty(
            bannerContainerXVar,
            `-${newState * (isMobile ? 100 : 25)}%`
          );
          return newState;
        });
      }
    },
    [currentSinglePicCarouselIndex, isMobile]
  );

  // 設定自動輪播功能
  const setBannerCarousel = useCallback(() => {
    bannerCarouselTimer.current = setInterval(() => {
      // 滑鼠進入或未開啟輪播時不做輪播滑動
      if (isbannerMouseEnter || !isBannerCarouselOpen) return;

      setBannerXRatio((preState) => {
        const newState =
          preState - bannerWidthRatio < bannersRightLimitRatio
            ? 0
            : preState - bannerWidthRatio;
        setCurrentClickModePicIndex(Decimal.abs(newState).div(25).toNumber());
        document.documentElement.style.setProperty(
          bannerContainerXVar,
          `${newState}%`
        );
        return newState;
      });
    }, 2000);
  }, [isbannerMouseEnter, isBannerCarouselOpen]);

  const onBannerContainerMouseLeave = useCallback(() => {
    setIsBannerMoved(false);
    setIsbannerMouseEnter(false);
  }, []);

  const onBannerContainerMouseEnter = useCallback(() => {
    setIsbannerMouseEnter(true);
  }, []);

  const onBannerCarouselOpen = useCallback(() => {
    setIsBannerCarouselOpen((preState) => !preState);
  }, []);

  useEffect(() => {
    setBannerCarousel();
    return () => {
      clearInterval(bannerCarouselTimer.current);
    };
  }, [setBannerCarousel]);

  useEffect(() => {
    return () => {
      clearTimeout(fadeInTimer.current);
      document.documentElement.style.setProperty(bannerContainerXVar, `0%`);
    };
  }, []);

  return (
    <div
      className={clsx('anima-slider', {
        'm-size': isMobile,
        [currentAnima]: !!currentAnima,
      })}
    >
      <div className='banner-block'>
        <div
          className={clsx('pre change-pic-icon', {
            disabled: currentSinglePicCarouselIndex === 0,
          })}
          onClick={(e) => {
            e.stopPropagation();
            onPreOrNextClick(-1);
          }}
        >
          <AiOutlineLeft />
        </div>
        {isMobile ? (
          <div className='banner-container'>
            {banners.map(({ banner, key }, index) => (
              <div
                key={`banner-${index}`}
                className={clsx('banner', { active: key === currentAnima })}
              >
                <div
                  className='img'
                  style={{ backgroundImage: `url(${banner})` }}
                  onClick={onBannerClick(key)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className='banner-container'
            style={bannerContainerStyle}
            onMouseEnter={onBannerContainerMouseEnter}
            onMouseDown={onBannerContainerMouseDown}
            onMouseMove={onBannerContainerMouseMove}
            onMouseUp={onBannerContainerMouseUp}
            onMouseLeave={onBannerContainerMouseLeave}
          >
            {banners.map(({ banner, key }, index) => (
              <div
                key={`banner-${index}`}
                className={clsx('banner', { active: key === currentAnima })}
                onMouseUp={onBannerClick(key)}
                draggable='false'
              >
                <div
                  className='img'
                  style={{ backgroundImage: `url(${banner})` }}
                />
              </div>
            ))}
          </div>
        )}
        <div
          className={clsx('next change-pic-icon', {
            disabled:
              currentSinglePicCarouselIndex ===
              (isMobile ? animaAmount - 2 : animaAmount - 4),
          })}
          onClick={(e) => {
            e.stopPropagation();
            onPreOrNextClick(+1);
          }}
        >
          <AiOutlineRight />
        </div>
      </div>
      <div className='action-btns'>
        <div className='action'>
          <Switch
            className='carousel-open-switch'
            isOpen={isBannerCarouselOpen}
            onChange={onBannerCarouselOpen}
            OpenIcon={() => '自動輪播'}
            ClosedIcon={() => '自動輪播'}
          />
        </div>
      </div>
      <Block title='introduction' Icon={FaBook}>
        <div className={clsx('intro', { 'fade-in': isFadeIn })}>
          {data[currentAnima]?.intro}
        </div>
      </Block>
      <Block title='gallery' Icon={FaTh}>
        <div className={clsx('gallery', { 'fade-in': isFadeIn })}>
          <div className='current-pic-container'>
            {data[currentAnima].imgs?.map((resource, index) => (
              <div
                key={`${currentAnima}-current-pic-${index}`}
                className={clsx('current-pic', {
                  show: currentPicIndex === index,
                })}
              >
                <img src={resource} alt='current-pic' />
              </div>
            ))}
          </div>
          <div className='pics'>
            {data[currentAnima].imgs?.map((resource, index) => (
              <img
                key={`${currentAnima}-pic-${index}`}
                className={clsx({ active: index === currentPicIndex })}
                src={resource}
                alt='anima-pic'
                onClick={() => {
                  if (index !== currentPicIndex) {
                    setCurrentPicIndex(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </Block>
      <Block title='reference' Icon={FaLink}>
        <div className='reference'>
          {data[currentAnima].reference.map((url, index) => (
            <div
              key={`${currentAnima}-reference-${index}`}
              className='url'
              onClick={() => {
                window.open(url, '_blank');
              }}
            >
              <FaExternalLinkAlt size={14} />
              <span>{referenceLabelEnums[index]}</span>
            </div>
          ))}
        </div>
      </Block>
    </div>
  );
};

export default AnimaSlider;
