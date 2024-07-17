import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='/' className='text-white text-lg font-bold'>
          MyWebsite
        </a>
        <div className='flex space-x-4'>
          <a href='#features' className='text-gray-300 hover:text-white'>
            Features
          </a>
          <a href='#about' className='text-gray-300 hover:text-white'>
            About
          </a>
          <a href='#contact' className='text-gray-300 hover:text-white'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
