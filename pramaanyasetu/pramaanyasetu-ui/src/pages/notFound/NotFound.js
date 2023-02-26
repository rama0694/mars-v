import React from 'react';

import NotFound_ from '../../images/404.svg';

const NotFound = () => {
  return <div className='display-flex w-100 h-100 align-items-center justify-content-center'>
    <img className='h-50 w-50' src={NotFound_} alt="not found" />
  </div>
}

export default NotFound;