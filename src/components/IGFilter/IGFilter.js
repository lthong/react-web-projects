import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { filterEnums, filterNames } from './enums';
import 'swiper/swiper-bundle.min.css';
import useDevice from '@/hooks/useDevice';
import PhotoSelector from '@/components/Common/PhotoSelector';

const IGFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('normal');
  const { isMobile } = useDevice();
  const slidesPerView = useMemo(() => (isMobile ? 2 : 6), [isMobile]);

  return (
    <div className='ig-filter'>
      <PhotoSelector photoClasses={filterEnums[currentFilter]}>
        {({ currentPhoto }) => (
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
                  <div
                    className={clsx('item', {
                      active: filterName === currentFilter,
                    })}
                  >
                    <figure className={filterEnums[filterName]}>
                      <img src={currentPhoto} alt={filterName} />
                      <figcaption className='name'>{filterName}</figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </PhotoSelector>
    </div>
  );
};

export default IGFilter;
