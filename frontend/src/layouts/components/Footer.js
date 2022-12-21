import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-dark py-5'>
      <div className='container grid grid-3'>
        <div>
          <h1>Stack</h1>
          <p>Copyright © {new Date().getFullYear()}</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Feature'>Features</Link>
            </li>
            <li>
              <Link to='/docs'>Docs</Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <Link to='#'>
            <i className='fab fa-github fa-2x' />
          </Link>
          <Link to='#'>
            <i className='fab fa-facebook fa-2x' />
          </Link>
          <Link to='#'>
            <i className='fab fa-instagram fa-2x' />
          </Link>
          <Link to='#'>
            <i className='fab fa-twitter fa-2x' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
