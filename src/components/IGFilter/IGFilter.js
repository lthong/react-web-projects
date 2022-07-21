import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { bg1 } from './assets';
import { filterEnums, filterNames } from './enums';
import { FiDownload } from 'react-icons/fi';
import 'swiper/swiper-bundle.min.css';
const slidesPerView = window.innerWidth < 500 ? 2 : 4;

const IGFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('normal');

  const onDownload = useCallback(() => {
    const link = document.createElement('a');
    const mainPhoto = document.getElementById('main-photo');
    const filterStyle = document.getElementById('filter-style');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = mainPhoto.width;
    canvas.height = mainPhoto.height;
    // https://developer.mozilla.org/zh-TW/docs/Web/API/Window/getComputedStyle
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
    ctx.filter = window.getComputedStyle(filterStyle).filter;
    ctx.drawImage(mainPhoto, 0, 0, mainPhoto.width, mainPhoto.height);
    link.download = 'ig-filter.png';
    link.href = canvas.toDataURL();
    link.click();
  }, []);

  return (
    <div className='ig-filter'>
      <div className='photo-block'>
        <figure className={filterEnums[currentFilter]} id='filter-style'>
          <img className='main-photo' id='main-photo' src={bg1} alt='bg1' />
        </figure>
      </div>
      <div className='filter-block'>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className='swipers'
        >
          {filterNames.map((filterName) => (
            <SwiperSlide
              key={filterName}
              onClick={() => {
                setCurrentFilter(filterName);
              }}
            >
              <div className='item'>
                <figure className={filterEnums[filterName]}>
                  <img src={bg1} alt='bg1' />
                </figure>
                <div className='name'>{filterName}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='action-block'>
        <FiDownload className='tool-icon' size={30} onClick={onDownload} />
      </div>
    </div>
  );
};

export default IGFilter;
