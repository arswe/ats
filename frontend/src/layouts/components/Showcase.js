import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='container grid'>
        <div className='showcase-text'>
          <h1>
            applicant <span>tracking</span> system
          </h1>
          <p>An applicant tracking system (ATS) is software for recruiters and employers to track candidates throughout the recruiting and hiring process.</p>
        </div>
        <div className=' card'>
          <h2>Request to Login</h2>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
