import React from 'react';

const Hero = () => {
  return (
    <section className='flex items-center justify-center min-h-screen bg-white'>
      <div className='text-center'>
        <h1 className='text-5xl font-Clutch font-bold mb-4'>
          Get <span className='italic font-Curl'>noticed</span> with perfectly
          tailored resumes.
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          In this brutal job market, we are leveling the playing field and
          boosting your chances of landing your dream job.
        </p>
        <button className='relative flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-white hover:text-black shadow-md'>
          Get Started
          <img
            src='/stickman.gif'
            alt='Running Stickman'
            className='absolute w-6 h-6 ml-2'
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
