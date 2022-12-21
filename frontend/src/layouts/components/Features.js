import React from 'react';

const Features = () => {
  return (
    <section className='features-main my-2'>
      <div className='container grid grid-3'>
        <div className='card flex'>
          <i className='fas fa-server fa-3x' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia
            molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!
          </p>
        </div>
        <div className='card flex'>
          <i className='fas fa-network-wired fa-3x' />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a itaque debitis qui vel dignissimos
            ipsum!
          </p>
        </div>
        <div className='card flex'>
          <i className='fas fa-laptop-code fa-3x' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
        </div>
        <div className='card flex'>
          <i className='fas fa-database fa-3x' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!</p>
        </div>
        <div className='card flex'>
          <i className='fas fa-power-off fa-3x' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
        </div>
        <div className='card flex'>
          <i className='fas fa-upload fa-3x' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
