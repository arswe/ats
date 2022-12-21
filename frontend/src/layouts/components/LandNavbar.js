import React from 'react';
import { Link } from 'react-router-dom';

const LandNavbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 className='logo'>
          <Link to='/'>Stack</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/feature'>Features</Link>
            </li>
            <li>
              <Link to='/docs'>Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LandNavbar;
