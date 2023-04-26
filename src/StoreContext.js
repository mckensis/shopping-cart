import { createContext, useState } from "react";

const StoreContext = createContext({});

export const DataProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <StoreContext.Provider value={{
      basket, setBasket
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext;