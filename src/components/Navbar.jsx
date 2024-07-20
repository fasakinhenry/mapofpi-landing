import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 w-full md:w-auto mx-4 md:mx-0 md:left-1/2 md:transform md:-translate-x-1/2 mt-5 bg-white rounded-full shadow-md px-3 py-1 z-20'>
      <nav className='flex justify-between items-center w-full'>
        <img src='/logo.png' alt='Logo' className='w-8 h-7 mx-3' />
        <ul className='hidden md:flex space-x-1 text-gray-800 py-0.5 list-none'>
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
        <button className='md:hidden' onClick={toggleMenu}>
          <svg
            className='w-8 h-8 text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </button>
      </nav>
      {isOpen && (
        <ul className='absolute top-14 left-0 w-full bg-white rounded-md shadow-lg py-2 list-none px-4'>
          <li className='font-GT text-[15px] px-4 py-2 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Home</a>
          </li>
          <li className='font-GT text-[15px] px-4 py-2 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Features</a>
          </li>
          <li className='font-GT text-[15px] px-4 py-2 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Developers</a>
          </li>
          <li className='font-GT text-[15px] px-4 py-2 font-extrabold rounded-full hover:bg-[#e7e7e7]'>
            <a href='#'>Community</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
