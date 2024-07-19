import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6 px-10 bg-transparent absolute w-full'>
      <img src='/logo.png' alt='Logo' className='w-8 h-8' />
      <ul className='flex space-x-8 text-gray-800'>
        <li className='font-GT text-lg'>
          <a href='#'>Home</a>
        </li>
        <li className='font-GT text-lg'>
          <a href='#'>Features</a>
        </li>
        <li className='font-GT text-lg'>
          <a href='#'>Developers</a>
        </li>
        <li className='font-GT text-lg'>
          <a href='#'>Community</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
