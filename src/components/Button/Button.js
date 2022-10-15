import React from 'react';

const Button = ({
  children,
  classNames,
  isRipple = true,
  rippleColor = 'light',
  bgColor = 'blue',
  bgColorWeight = 500,
  ...rest
}) => {
  return (
    <button
      type='button'
      data-mdb-ripple={isRipple}
      data-mdb-ripple-color={rippleColor}
      className={`inline-block px-6 py-2.5 bg-${bgColor}-${bgColorWeight} text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-${bgColor}-${
        bgColorWeight + 100
      } hover:shadow-lg focus:bg-${bgColor}-${
        bgColorWeight + 100
      } focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${bgColor}-${
        bgColorWeight + 200
      } active:shadow-lg transition duration-150 ease-in-out ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
