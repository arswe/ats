import React from 'react';
import { Link } from 'react-router-dom';
import cloud from '../../assets/cloud.png';

const Cloud = () => {
  return (
    <section className={`[classes.cloud, classes.bg-primary my-2 py-2]`}>
      <div className='container grid'>
        <div className='text-center'>
          <h2 className='lg'>Extreme Cloud Hosting</h2>
          <p className='lead my-1'>Cloud hosting like you've never seen. Fast, efficient and scalable</p>
          <Link to='/feature' className='btn btn-dark'>
            Read More
          </Link>
        </div>
        <img src={cloud} alt='cloud' />
      </div>
    </section>
  );
};

export default Cloud;
