import React from 'react';

const Loader = () => (
  <div
    className='mt-7 spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-300'
    role='status'
  >
    <span className='visually-hidden'>Loading...</span>
  </div>
);

export default Loader;
