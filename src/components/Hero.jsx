import React from 'react';

const Hero = () => {
  return (
    <section className='bg-gray-700 text-white py-20'>
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to MyWebsite</h1>
        <p className='text-lg mb-8'>
          A short description about what this website is about.
        </p>
        <a
          href='#features'
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
