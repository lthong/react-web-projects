import React, { useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { FaPaintBrush, FaEraser } from 'react-icons/fa';
import { fullCanvas } from '@/libraries/variable';
const { topHeight, canvasW, canvasH } = fullCanvas;

const lineWidthEnum = {
  small: 5,
  middle: 15,
  large: 25,
};

const Drawing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({});
  const [strokeStyle, setStrokeStyle] = useState('#ffae00');
  const [isDrawingMode, setIsDrawingMode] = useState(true);
  const [lineWidth, setLineWidth] = useState('middle');

  const onMouseDown = useCallback((e) => {
    setIsDrawing(true);
    setStartPoint({ x: e.clientX, y: e.clientY - topHeight });
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const onDrawEnd = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const onDraw = useCallback(
    ({ x, y }) => {
      if (isDrawing && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.strokeStyle = isDrawingMode ? strokeStyle : 'rgb(232, 232, 232)';
        ctx.lineWidth = isDrawingMode ? lineWidthEnum[lineWidth] : 40;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        setStartPoint({ x, y });
      }
    },
    [isDrawing, startPoint, strokeStyle, lineWidth, isDrawingMode]
  );

  const onMouseMove = useCallback(
    (e) => {
      onDraw({ x: e.clientX, y: e.clientY - topHeight });
    },
    [onDraw]
  );

  const getTouchXY = useCallback((e) => {
    e.preventDefault();
    // https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/targetTouches
    // https://developer.mozilla.org/zh-CN/docs/Web/API/TouchList
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/clientX
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/clientY
    const { clientX, clientY } = e.targetTouches[0];
    return { clientX, clientY };
  }, []);

  const onTouchStart = useCallback(
    (e) => {
      setIsDrawing(true);
      const { clientX, clientY } = getTouchXY(e);
      setStartPoint({ x: clientX, y: clientY - topHeight });
    },
    [getTouchXY]
  );

  const onTouchMove = (e) => {
    const { clientX, clientY } = getTouchXY(e);
    onDraw({ x: clientX, y: clientY - topHeight });
  };

  const onColorChange = useCallback((e) => {
    setStrokeStyle(e.target.value);
  }, []);

  const onSizeChange = useCallback((e) => {
    setLineWidth(e.target.value);
  }, []);

  const onClearAll = useCallback(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasW, canvasH);
  }, []);

  const onDownload = useCallback(() => {
    const link = document.createElement('a');
    const target = canvasRef.current;
    link.download = 'drawing.png';
    link.href = target.toDataURL('image/png');
    link.click();
  }, []);

  return (
    <div className='drawing'>
      <canvas
        className='canvas'
        ref={canvasRef}
        width={canvasW}
        height={canvasH}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onDrawEnd}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onDrawEnd}
      />
      <div className='tool-bar'>
        <div>
          <FaEraser
            className={clsx('icon', { active: !isDrawingMode })}
            size={35}
            onClick={() => {
              setIsDrawingMode(false);
            }}
          />
          <FaPaintBrush
            className={clsx('icon', { active: isDrawingMode })}
            size={35}
            onClick={() => {
              setIsDrawingMode(true);
            }}
          />
          <input
            type='color'
            className='color-choose'
            onChange={onColorChange}
            value={strokeStyle}
          ></input>
          <div className='ui form'>
            <div className='field'>
              <select
                className='ui search dropdown'
                value={lineWidth}
                onChange={onSizeChange}
              >
                <option value='small'>Small</option>
                <option value='middle'>Middle</option>
                <option value='large'>Large</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className='ui button btn' onClick={onClearAll}>
            clear
          </button>
          <button className='ui button btn' onClick={onDownload}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawing;
