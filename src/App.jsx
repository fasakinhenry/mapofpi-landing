import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import './index.css';

const App = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default App;
