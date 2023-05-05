import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout";
import CartOverlay from "./components/CartOverlay";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DataProvider } from "./context/StoreContext";

const RouteSwitch = () => {
  return (
    <HashRouter basename="/">
      <DataProvider>
        <Nav />
        <CartOverlay />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop /> }/>
            <Route path="/checkout" element={<Checkout /> } />
            <Route path="/contact" element={<Contact /> } />
          </Routes>
        <Footer/>
      </DataProvider>
    </HashRouter>
  )
}

export default RouteSwitch;