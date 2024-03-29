import { useState, useEffect } from 'react';
// import bowser from 'bowser';
// const parser = bowser.getParser(window.navigator.userAgent);
// const platform = parser.getPlatform();

const defaultWidthThreshold = 530;

const useDevice = (props = {}) => {
  const { resizeCallback = () => {}, widthThreshold = defaultWidthThreshold } =
    props;
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
  }, [resizeCallback, widthThreshold]);

  return { isMobile };
};

export default useDevice;
