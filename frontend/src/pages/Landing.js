import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Showcase from './../layouts/components/Showcase';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
     <Showcase />
    </React.Fragment>
  );
};

export default Landing;
