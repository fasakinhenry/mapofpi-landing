import React from 'react';

const Navbar = () => {
  return (
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-5 bg-white rounded-full shadow-md px-3 py-1 z-20'>
      <nav className='flex justify-between items-center'>
        <img src='/logo.png' alt='Logo' className='w-8 h-7 mx-3' />
        <ul className='flex space-x-1 text-gray-800 py-0.5'>
          <li className='font-GT text-[15px] px-3 py-1 font-extrabold rounded-full bg-[#e7e7e7]'>
            <a href='#'>Home</a>
          </li>
          <li className='font-GT text-[15px] px-3 py-1 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Features</a>
          </li>
          <li className='font-GT text-[15px] px-3 py-1 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Developers</a>
          </li>
          <li className='font-GT text-[15px] px-3 py-1 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Community</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
