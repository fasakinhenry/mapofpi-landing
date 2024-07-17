import React from 'react';

const Features = () => {
  return (
    <section id='features' className='bg-gray-100 py-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-8'>Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-4 shadow-md rounded'>
            <h3 className='text-2xl font-bold mb-4'>Feature 1</h3>
            <p>A description of the first feature.</p>
          </div>
          <div className='bg-white p-4 shadow-md rounded'>
            <h3 className='text-2xl font-bold mb-4'>Feature 2</h3>
            <p>A description of the second feature.</p>
          </div>
          <div className='bg-white p-4 shadow-md rounded'>
            <h3 className='text-2xl font-bold mb-4'>Feature 3</h3>
            <p>A description of the third feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
