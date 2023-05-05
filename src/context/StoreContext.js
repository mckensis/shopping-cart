import { createContext, useState } from "react";

// Create a context for the store to use
const StoreContext = createContext({});

// Provider to give access to functions and variables required by components
export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [cartOverlayVisibility, setCartOverlayVisibility] = useState(false);

  // Save the cart variable and update local storage
  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handles hiding the cart when the user closes it
  const handleHideCart = () => {
    document.body.classList.remove('no-scroll');
    setCartOverlayVisibility(false);
  }

  // Handles showing the cart when the user opens it
  const handleShowCart = () => {
    document.body.classList.add('no-scroll');
    setCartOverlayVisibility(true);
  }

  // Adds a product to the cart, or updates the existing item's quantity
  const handleAddToCart = (item) => {
    // Create a temporary cart update the contents
    let tempCart = [...cart];

    // Try to find the product in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id ? cartItem : null);
    
    // Increment the product quantity if found in the cart
    if (foundItem) foundItem.quantity += 1;

    // Add a new product if not found in the cart
    if (!foundItem) {
      const newCartItem = { product: item, quantity: 1};
      tempCart = [...cart, newCartItem];
    }

    saveCart(tempCart);
  };

  // Removes a product from the cart regardless of the quantity that was in there
  const handleRemoveFromCart = (cartItem) => {
    let tempCart = [...cart];
    
    // Filter the cart so that it doesn't include the cartItem which was passed to the function
    tempCart = tempCart.filter(item => item !== cartItem);
    
    saveCart(tempCart);
  }

  // Decrease the quantity of a product in the cart
  const handleDecreaseItemCount = (item) => {
    let tempCart = [...cart];

    // Try to find the item which was passed to the function in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id);
    
    // Return if the item isn't in the cart
    if (!foundItem) return;

    // If the quantity of the product in the cart was 1 then call the function to remove this product from the cart 
    if (foundItem.quantity === 1) {
      handleRemoveFromCart(foundItem);
      return;
    }

    // Decrease the quantity of the item
    foundItem.quantity -= 1;
    saveCart(tempCart);
  };

  // Returns the total number of products in the cart
  const returnTotalItemsInCart = () => {
    return cart.reduce((total, item) => { return total + item.quantity; }, 0);
  }

  // Returns the total cost of all products in the cart
  const returnCartCost = () => {
    const cost = cart.reduce((total, item) => 
      { return Number(total + (item.quantity * item.product.price)); }, 0)
    return cost.toFixed(2);
  }

  // Returns the delivery cost
  // Free delivery over £20
  const returnDeliveryCost = () => {
    if (returnCartCost() > 20) return Number(0);
    return Number(5);
  }

  // Returns the cost of the products plus delivery
  const returnTotalCost = () => {
    return Number(returnCartCost() + returnDeliveryCost()).toFixed(2);
  }

  return (
    <StoreContext.Provider value={{
      cart, setCart, cartOverlayVisibility, setCartOverlayVisibility,
      handleAddToCart, handleRemoveFromCart, handleDecreaseItemCount, 
      handleShowCart, handleHideCart, saveCart,
      returnTotalItemsInCart, returnCartCost, returnDeliveryCost, returnTotalCost
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext;