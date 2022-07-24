import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { bg1, bg2 } from './assets';
import { filterEnums, filterNames } from './enums';
import { FiDownload, FiUpload } from 'react-icons/fi';
import 'swiper/swiper-bundle.min.css';
import clsx from 'clsx';
const slidesPerView = window.innerWidth < 530 ? 2 : 6;

const IGFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('normal');
  const [currentPhoto, setCurrentPhoto] = useState(bg1);

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

  const onUpload = useCallback((e) => {
    const file = e.target.files[0];
    const isTypeValid = ['png', 'jpeg'].includes(file.type?.split('/')[1]);
    if (isTypeValid) {
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      const imgSrc = URL.createObjectURL(file);
      setCurrentPhoto(imgSrc);
    } else {
      alert('File type error! It accepts the type of .png and .jpeg');
    }
  }, []);

  return (
    <div className='ig-filter'>
      <div className='photo-block'>
        <figure
          className={`main-photo ${filterEnums[currentFilter]}`}
          id='filter-style'
        >
          <img id='main-photo' src={currentPhoto} alt='main-photo' />
        </figure>
        <div className='photo-select'>
          <div>
            <img
              src={bg1}
              alt='bg1'
              onClick={() => {
                setCurrentPhoto(bg1);
              }}
            />
          </div>
          <div>
            <img
              src={bg2}
              alt='bg2'
              onClick={() => {
                setCurrentPhoto(bg2);
              }}
            />
          </div>
          <div className='upload'>
            <label htmlFor='file-upload' className='upload-btn'>
              <FiUpload className='upload-icon' size={30} accept='image/*' />
              <span>Upload</span>
            </label>
            <input
              id='file-upload'
              type='file'
              className='file-input'
              onChange={onUpload}
            />
          </div>
        </div>
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
      <div className='action-block'>
        <div className='download-btn'>
          <FiDownload
            className='download-icon'
            size={30}
            onClick={onDownload}
          />
          <span>Download</span>
        </div>
      </div>
    </div>
  );
};

export default IGFilter;
