import React from 'react';

const LandStats = () => {
  return (
    <section className='stats'>
      <div className='container'>
        <h3 className='stats-heading text-center my-1'>
          Welcome to the best platform for building applications of all types with modern architecture and scaling
        </h3>
        <div className='grid grid-3 text-center my-4'>
          <div>
            <i className='fas fa-server fa-3x' />
            <h3>10,349,405</h3>
            <p className='text-secondary'>Deployments</p>
          </div>
          <div>
            <i className='fas fa-upload fa-3x' />
            <h3>987 TB</h3>
            <p className='text-secondary'>Published</p>
          </div>
          <div>
            <i className='fas fa-project-diagram fa-3x' />
            <h3>2,343,265</h3>
            <p className='text-secondary'>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandStats;
