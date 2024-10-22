import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section className='relative flex items-center justify-center min-h-screen bg-white'>
      <div className='absolute inset-0 bg-cover h-[90vh] min-h-[83vh] opacity-30 scale-[1.2] bg-hero-image z-0'></div>
      <div className='px-6 md:px-4 max-w-screen-lg mx-auto backdrop-blur-lg backdrop-opacity-50 rounded-lg p-6'>
        <h1 className='text-4xl md:text-6xl font-Clutch font-bold mb-6 md:mb-10 leading-tight text-left md:text-center lg:leading-[5rem]'>
          Transact <span className='italic font-Curl'>business</span>, Interact with{' '}
          <span className='italic font-Curl'>Buyers</span> and{' '}
          <span className='italic font-Curl'>Sellers</span> using PI.
        </h1>
        <p className='text-base md:text-lg text-gray-600 mb-6 md:mb-10 md:mx-20 font-GS text-left md:text-center'>
          Map of PI app is a marketplace connecting buyers and sellers who want to transact business with the PI network.
        </p>
        <div className='flex justify-center md:justify-center'>
          <a className='w-full md:w-auto px-6 py-3 text-lg font-medium text-white bg-[#386f4f] rounded-full hover:bg-white hover:text-black shadow-md transition-all duration-300' href="https://mapofpi-react.netlify.app/">
            Get Started
            <img
              src='/stickman.png'
              alt='Running Stickman'
              className='w-6 h-6 ml-2 inline-block hover:hidden'
            />
            <img
              src='/stickman.gif'
              alt='Running Stickman'
              className='w-6 h-6 ml-2 hidden hover:inline-block animate-running'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
