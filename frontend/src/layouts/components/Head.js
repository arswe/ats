import React from 'react';

const Head = ({ title, lead, img }) => {
  return (
    <section className='features-head bg-primary py-3'>
      <div className='container grid'>
        <div>
          <h1 className='xl'>{title}</h1>
          <p className='lead'>{lead}</p>
        </div>
        <img src={img} alt={title} />
      </div>
    </section>
  );
};

export default Head;
