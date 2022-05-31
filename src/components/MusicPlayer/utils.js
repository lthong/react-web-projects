import decimal from 'decimal.js';

export const getTime = (value) => {
  if (decimal(value).isNaN()) {
    return '';
  }
  const min = decimal.div(value, 60).floor();
  const sec = decimal.mod(value, 60).floor();
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
};
