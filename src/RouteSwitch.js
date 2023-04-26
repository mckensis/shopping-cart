import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';
import Shop from './Shop';
import Nav from './Nav';
import Contact from './Contact';
import Footer from './Footer';
import getShopProducts from './getShopProducts';
import { DataProvider } from './StoreContext';

const RouteSwitch = () => {
  const products = getShopProducts();

  return (
    <BrowserRouter>
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Shop products={products}/> }/>
          <Route path='/cart' element={<Cart/> } />
          <Route path='/contact' element={<Contact/> } />
        </Routes>
        <Footer/>
      </DataProvider>
    </BrowserRouter>
  )
}

export default RouteSwitch;