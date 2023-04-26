import Product from './Product';
import { useContext } from 'react';
import StoreContext from './StoreContext';

const Shop = ({ products }) => {
  const { basket, setBasket } = useContext(StoreContext);

  const saveBasket = (updatedBasket) => {
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  //Increment item quantity in basket
  const handleAddToBasket = (item) => {
    let tempBasket = [...basket];
    
    //Check if the item is already in the basket
    let foundItem = tempBasket.find(basketItem => basketItem.product.id === item.id ? basketItem : null);
    
    //Increment the quantity
    if (foundItem) {
      foundItem.quantity += 1;
    }
    
    //Add the new item with a quantity of 1
    if (!foundItem) {
      const newBasketItem = { product: item, quantity: 1};
      tempBasket = [...basket, newBasketItem];
    }
    saveBasket(tempBasket);
  };

  //Decrement item quantity in basket
  const handleRemoveFromBasket = (item) => {
    let tempBasket = [...basket];

    //Check if the item is already in the basket
    let foundItem = tempBasket.find(basketItem => basketItem.product.id === item.id);
    
    //Return if the item isn't in the basket
    if (!foundItem) {
      return;
    }
    //Remove the item
    if (foundItem) {
      if (foundItem.quantity > 0) {
        foundItem.quantity -= 1;
      }
    }
    //Filter out any items with quantity of 0 from the basket
    tempBasket = tempBasket.filter(item => item.quantity > 0); 
    saveBasket(tempBasket);
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