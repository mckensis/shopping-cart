import { createContext, useState } from "react";

const StoreContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [cartOverlayVisibility, setCartOverlayVisibility] = useState(false);

  return (
    <StoreContext.Provider value={{
      cart, setCart, cartOverlayVisibility, setCartOverlayVisibility
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext;