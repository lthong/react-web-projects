import React, { useCallback } from 'react';
import clsx from 'clsx';

const Switch = ({
  className,
  isOpen,
  onChange,
  OpenIcon,
  iconSize = 20,
  ClosedIcon,
  disabled = false,
}) => {
  const onSwitchClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (!disabled) {
        onChange && onChange();
      }
    },
    [onChange, disabled]
  );

  return (
    <div
      className={clsx('common-switch', {
        [className]: !!className,
        disabled,
      })}
      onClick={onSwitchClick}
    >
      <div className='icon'>
        {isOpen ? <OpenIcon size={iconSize} /> : <ClosedIcon size={iconSize} />}
      </div>
      <div className={clsx('btn', { open: isOpen })}>
        <div className='switch' />
      </div>
    </div>
  );
};

export default Switch;
