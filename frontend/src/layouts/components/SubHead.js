import React from 'react';
import server2 from '../assets/server2.png';

const SubHead = () => {
  return (
    <section className='features-sub-head bg-light py-3'>
      <div className='container grid'>
        <div>
          <h1 className='md'>The Loruki Platform</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea
            consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!
          </p>
        </div>
        <img src={server2} alt='server2' />
      </div>
    </section>
  );
};

export default SubHead;
