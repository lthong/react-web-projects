import React, { useState } from 'react';
import clsx from 'clsx';
import PhotoSelector from '@/components/Common/PhotoSelector';
import useDevice from '@/hooks/useDevice';

const filterConfig = [
  { label: '亮度', key: 'brightness', value: '100', max: '200' },
  { label: '對比', key: 'contrast', value: '100', max: '200' },
  { label: '灰階', key: 'grayscale', value: '0', max: '200' },
  { label: '負片', key: 'invert', value: '0', max: '100' },
  { label: '飽和', key: 'saturate', value: '100', max: '200' },
  { label: '懷舊', key: 'sepia', value: '0', max: '200' },
  { label: '不透明', key: 'opacity', value: '100', max: '100' },
  { label: '模糊', key: 'blur', value: '0', max: '20' },
  { label: '下拉陰影', key: 'drop-shadow', value: '5', max: '10' },
  { label: '色相旋轉', key: 'hue-rotate', value: '0', max: '360' },
];

const initValues = filterConfig.reduce(
  (acc, item) => ({ ...acc, [item.key]: item.value }),
  {}
);

const CssFilters = () => {
  const [values, setValues] = useState(() => initValues);
  const { isMobile } = useDevice();
  return (
    <div className='css-filters'>
      <PhotoSelector
        mainPhotoCustomStyle={{
          filter: `brightness(${values['brightness']}%) contrast(${values['contrast']}%) grayscale(${values['grayscale']}%) invert(${values['invert']}%) saturate(${values['saturate']}%) sepia(${values['sepia']}%) opacity(${values['opacity']}%)  blur(${values['blur']}px) drop-shadow(5px 5px ${values['drop-shadow']}px #aaa) hue-rotate(${values['hue-rotate']}deg)`,
        }}
        onReset={() => {
          setValues(initValues);
        }}
      >
        {() => (
          <div className={clsx('filter-block', { 'm-size': isMobile })}>
            {filterConfig.map(({ key, label, max }) => (
              <div key={key} className='data-box'>
                <div className='info'>
                  <span>{label}</span>
                  <span>{values[key]}</span>
                </div>
                <input
                  type='range'
                  min='0'
                  max={max}
                  step='1'
                  value={values[key]}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setValues((preState) => ({ ...preState, [key]: newValue }));
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </PhotoSelector>
    </div>
  );
};

export default CssFilters;
