import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-[calc(100vh-287px)] mx-auto p-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
