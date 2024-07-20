import React from 'react';

function Header() {
  return (
    <header className='text-white relative z-10 bg-transparent'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='w-8 h-8 bg-white rounded-sm mr-2'></div>
          <span className='text-xl font-bold'>Tangled</span>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <a href='#features' className='hover:text-gray-300'>
            Features
          </a>
          <a href='#resources' className='hover:text-gray-300'>
            Resources
          </a>
          <a href='#chatGPT' className='hover:text-gray-300'>
            ChatGPT
          </a>
          <a href='#pricing' className='hover:text-gray-300'>
            Pricing
          </a>
        </nav>
        <button className='bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300'>
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
