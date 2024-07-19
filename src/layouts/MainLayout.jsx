import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className='relative bg-[ff6d6d] overflow-hidden'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
