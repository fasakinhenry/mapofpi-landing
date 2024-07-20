import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section className='relative flex items-center justify-center min-h-screen bg-white'>
      <div className='absolute inset-0 bg-cover h-[90vh] min-h-[83vh] opacity-30 scale-[1.2] bg-hero-image z-0'></div>
      <div className='text-center px-4 max-w-screen-lg mx-auto backdrop-blur-lg backdrop-opacity-50 rounded-lg p-6'>
        <h1 className='text-[75px] font-Clutch font-bold mb-10 leading-tight'>
          Get <span className='italic font-Curl'>noticed</span> with perfectly
          tailored <span className='italic font-Curl'>resumes</span>.
        </h1>
        <p className='text-lg text-gray-600 mb-10 mx-20 font-GS'>
          In this brutal job market, we are leveling the playing field and
          boosting your chances of landing your dream job.
        </p>
        <div className='flex justify-center'>
          <button className='relative flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-white hover:text-black shadow-md transition-all duration-300'>
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
