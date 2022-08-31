import { useEffect, useRef } from 'react';

const useInterval = ({ update = () => {}, delay = 100, isStartInterval }) => {
  const intervalCb = useRef(update);
  const intervalId = useRef();

  useEffect(() => {
    intervalCb.current = update;
  }, [update]);

  useEffect(() => {
    if (isStartInterval) {
      intervalId.current = setInterval(intervalCb.current, delay);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isStartInterval, delay]);
};

export default useInterval;
