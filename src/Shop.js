import Product from './Product';
import { useContext } from 'react';
import StoreContext from './StoreContext';

const Shop = ({ products }) => {
  const { cart, setCart } = useContext(StoreContext);

  const saveBasket = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  //Increment item quantity in cart
  const handleAddToBasket = (item) => {
    let tempCart = [...cart];
    
    //Check if the item is already in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id ? cartItem : null);
    
    //Increment the quantity
    if (foundItem) {
      foundItem.quantity += 1;
    }
    
    //Add the new item with a quantity of 1
    if (!foundItem) {
      const newCartItem = { product: item, quantity: 1};
      tempCart = [...cart, newCartItem];
    }
    saveBasket(tempCart);
  };

  //Decrement item quantity in cart
  const handleRemoveFromBasket = (item) => {
    let tempCart = [...cart];

    //Check if the item is already in the cart
    let foundItem = tempCart.find(cartItem => cartItem.product.id === item.id);
    
    //Return if the item isn't in the cart
    if (!foundItem) {
      return;
    }
    //Remove the item
    if (foundItem) {
      if (foundItem.quantity > 0) {
        foundItem.quantity -= 1;
      }
    }
    //Filter out any items with quantity of 0 from the cart
    tempCart = tempCart.filter(item => item.quantity > 0); 
    saveBasket(tempCart);
  };

  return (
    <main>
      <section className='products'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToBasket={handleAddToBasket}
            handleRemoveFromBasket={handleRemoveFromBasket}
          />
        ))}
      </section>
    </main>
  )
}

export default Shop;