import React from 'react';
import './NotFound.scss';
import ErrorPage404 from '@components/ErrorPage404';

const NotFound: React.FC = () => {
  return (
    <section className='NotFound'>
      <ErrorPage404 />
    </section>
  );
};

export default NotFound;
