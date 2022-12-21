import React from 'react';
import server2 from '../assets/server2.png';
import DocsMain from '../components/DocsMain';
import Head from '../components/Head';

const Docs = () => {
  return (
    <>
      <Head title='Documentation' img={server2} lead='Learn how to work with the Stack platform' />
      <DocsMain />
    </>
  );
};

export default Docs;