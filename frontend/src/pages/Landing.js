import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import main from '../assets/images/filing-system.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              applicant <span>tracking</span> system
            </h1>
            <p>An applicant tracking system (ATS) is software for recruiters and employers to track candidates throughout the recruiting and hiring process.</p>
            <Link
              to='/register'
              className='btn btn-hero'
            >
              Login/Register
            </Link>
          </div>
          <img
            src={main}
            alt='job hunt'
            className='img main-img'
          />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;