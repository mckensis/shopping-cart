import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Checkout from "./Checkout";
import CartOverlay from "./CartOverlay";
import Shop from "./Shop";
import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";
import getShopProducts from "./getShopProducts";
import { DataProvider } from "./StoreContext";

const RouteSwitch = () => {
  // localStorage.clear();
  const products = getShopProducts();
  localStorage.setItem("products", JSON.stringify(products));

  return (
    <BrowserRouter>
      <DataProvider>
        <Nav />
        <CartOverlay />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop products={products} /> }/>
          <Route path="/checkout" element={<Checkout /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
        <Footer/>
      </DataProvider>
    </BrowserRouter>
  )
}

export default RouteSwitch;