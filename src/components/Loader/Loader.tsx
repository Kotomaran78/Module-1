import React from 'react';
import './Loader.scss';
import Spinner from '@assets/icons/Spinner.svg';

const Loader: React.FC = () => {
  return (
    <div className='spinner'>
      <img src={Spinner} alt='Spinner' />
    </div>
  );
};

export default Loader;
