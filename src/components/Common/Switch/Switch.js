import React, { useCallback } from 'react';
import clsx from 'clsx';

const Switch = ({
  className,
  isOpen,
  onChange,
  OpenIcon,
  iconSize = 20,
  ClosedIcon,
}) => {
  const onSwitchClick = useCallback(
    (e) => {
      e.stopPropagation();
      onChange && onChange();
    },
    [onChange]
  );

  return (
    <div
      className={clsx('common-switch', { [className]: !!className })}
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
