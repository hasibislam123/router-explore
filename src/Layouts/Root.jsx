import React, {  useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet, useNavigation } from 'react-router';  // <-- dom ব্যবহার করবে
import LoadingSpinner from '../Component/LoadingSpinner';
import { CartContext } from '../../Peoviders/CartContext';



const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
   const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Navbar />
      {navigation?.state === 'loading'
        ? <LoadingSpinner></LoadingSpinner>
        : <main className="min-h-[calc(100vh-287px)] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <Outlet />
        </main>}
      <Footer />
    </CartContext.Provider>
  );
};

export default RootLayout;
