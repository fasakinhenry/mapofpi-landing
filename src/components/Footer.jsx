import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div className='flex justify-center space-x-4 mt-2'>
          <a
            href='https://twitter.com'
            className='text-gray-300 hover:text-white'
          >
            Twitter
          </a>
          <a
            href='https://facebook.com'
            className='text-gray-300 hover:text-white'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com'
            className='text-gray-300 hover:text-white'
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
