import { createContext, useState } from "react";

const StoreContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [cartOverlayVisibility, setCartOverlayVisibility] = useState(false);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleHideCart = () => {
    document.body.classList.remove('no-scroll');
    setCartOverlayVisibility(false);
  }

  const handleShowCart = () => {
    document.body.classList.add('no-scroll');
    setCartOverlayVisibility(true);
  }

  //Increment item quantity in cart
  const handleAddToCart = (item) => {
    let tempCart = [...cart];

    //Check if the item is already in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id ? cartItem : null);
    
    //Increment the quantity
    if (foundItem) foundItem.quantity += 1;

    //Add the new item with a quantity of 1
    if (!foundItem) {
      const newCartItem = { product: item, quantity: 1};
      tempCart = [...cart, newCartItem];
    }
    saveCart(tempCart);
  };

  const handleRemoveFromCart = (cartItem) => {
    let tempCart = [...cart];
    //Filter out any items with quantity of 0 from the cart
    tempCart = tempCart.filter(item => item !== cartItem);
    saveCart(tempCart);
  }

  //Decrement item quantity in cart
  const handleDecreaseItemCount = (item) => {
    let tempCart = [...cart];
    //Check if the item is already in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id);
    
    //Return if the item isn't in the cart
    if (!foundItem) return;

    if (foundItem.quantity === 1) {
      handleRemoveFromCart(foundItem);
      return;
    }

    foundItem.quantity -= 1;
    saveCart(tempCart);
  };

  return (
    <StoreContext.Provider value={{
      cart, setCart, cartOverlayVisibility, setCartOverlayVisibility,
      handleAddToCart, handleRemoveFromCart, handleDecreaseItemCount, 
      handleShowCart, handleHideCart, saveCart
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext;