import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Infinite Jest</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
