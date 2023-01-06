import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import decimal from 'decimal.js';
import { BsPlay, BsPause } from 'react-icons/bs';

const TIMER_CIRCLE_SIZE = 300; // svg 寬高長度
const TIMER_CIRCLE_RADIUS = 140; // svg circle 半徑長度
const TIMER_CIRCLE_PERIMETER = TIMER_CIRCLE_RADIUS * 2 * Math.PI; // svg circle 圓周長度
const TIMER_CIRCLE_CENTER = TIMER_CIRCLE_SIZE / 2; // svg circle 中心位置
const ININ_TIME_VALUE = 3; // 初始秒數

const Countdown = () => {
  const timerId = useRef(null);
  // timerValue：總共秒數
  const timerValue = useRef(ININ_TIME_VALUE);
  const [isPause, setIsPause] = useState(true);
  // circleDashOffset：當前svg circle 邊框推移量
  const [circleDashOffset, setCircleDashOffset] = useState(0);
  // timer：當前剩餘秒數
  const [timer, setTimer] = useState(timerValue.current);

  const tick = useCallback(() => {
    timerId.current = setInterval(() => {
      setTimer((preState) => {
        // 每 20毫秒 執行一次，每次減少 0.02秒（意即20毫秒）
        const nextValue = decimal.sub(preState, 0.02).toNumber().toFixed(2);
        if (nextValue <= 0) {
          clearInterval(timerId.current);
          setCircleDashOffset(TIMER_CIRCLE_PERIMETER);
          setIsPause(true);
          return 0;
        } else {
          return nextValue;
        }
      });
    }, 20); // 每 20毫秒 執行一次
  }, []);

  useEffect(() => {
    // minusRatio：目前剩餘秒數 / 總秒數
    const minusRatio = decimal
      .sub(timerValue.current, timer)
      .div(timerValue.current);
    // minusValue：負數值（minusRatio * 圓周長）
    const minusValue = -decimal
      .mul(minusRatio, TIMER_CIRCLE_PERIMETER)
      .toNumber();
    // 設定邊框開始的推移量（看起來會有邊框減少的效果）
    setCircleDashOffset(minusValue);
  }, [timer]);

  const onStart = useCallback(() => {
    setIsPause(false);
    if (timer <= 0) {
      setTimer(timerValue.current);
      setCircleDashOffset(0);
    }
    tick();
  }, [timer, tick]);

  const onPause = useCallback(() => {
    setIsPause(true);
    clearInterval(timerId.current);
  }, []);

  const onTimerChange = useCallback((e) => {
    const inputValue = e.target.value;
    const isNumber = !Number.isNaN(Number(inputValue));
    if (isNumber) {
      const value = Number(inputValue);
      setTimer(value);
      setCircleDashOffset(0);
      timerValue.current = value || ININ_TIME_VALUE;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Input Error',
        text: 'Please input number',
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div className='countdown-wrapper'>
      <div className='intor'>
        輸入秒數並按下開始<br></br>就會開始倒數囉！
      </div>
      <div className={clsx('countdown', { waiting: timer <= 0 })}>
        <svg height={TIMER_CIRCLE_SIZE} width={TIMER_CIRCLE_SIZE}>
          <circle
            r={TIMER_CIRCLE_RADIUS}
            cx={TIMER_CIRCLE_CENTER}
            cy={TIMER_CIRCLE_CENTER}
            fill='var(--primary-color)'
            stroke='var(--secondary-color)'
            strokeWidth={5}
            // stroke-dasharray 是把stroke做成了是虛線的效果，線段會被拆成線段、空白
            strokeDasharray={[TIMER_CIRCLE_PERIMETER]}
            // stroke-dashoffset 屬性是將上面的虛線推移
            strokeDashoffset={circleDashOffset}
            transform={`rotate(-90 ${TIMER_CIRCLE_CENTER} ${TIMER_CIRCLE_CENTER})`}
          />
        </svg>
        <div className='timer'>
          <input
            maxLength={4}
            type='text'
            value={timer}
            onChange={onTimerChange}
            onClick={onPause}
          ></input>
          <button className='icon'>
            {isPause ? (
              <BsPlay size={50} onClick={onStart} />
            ) : (
              <BsPause size={50} onClick={onPause} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
