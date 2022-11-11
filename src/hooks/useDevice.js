import { useState, useEffect } from 'react';
// import bowser from 'bowser';
// const parser = bowser.getParser(window.navigator.userAgent);
// const platform = parser.getPlatform();

const widthThreshold = 530;

const useDevice = (props = {}) => {
  const { resizeCallback = () => {} } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth < widthThreshold);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < widthThreshold);
      resizeCallback && resizeCallback();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [resizeCallback]);

  return { isMobile };
};

export default useDevice;
