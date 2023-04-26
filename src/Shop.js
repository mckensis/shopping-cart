import Product from './Product';
import { useContext } from 'react';
import StoreContext from './StoreContext';

const Shop = ({ products }) => {
  const { basket, setBasket } = useContext(StoreContext);

  const handleAddToBasket = (item) => {
    let tempBasket = [...basket];
    //Check if the item is already in the basket
    let foundItem = tempBasket.find(basketItem => basketItem.product.id === item.id ? basketItem : null);
    if (foundItem) {
      foundItem.quantity += 1;
    }
    if (!foundItem) {
      const newBasketItem = { product: item, quantity: 1};
      tempBasket = [...basket, newBasketItem];
    }
    setBasket(tempBasket);
  }

  return (
    <main>
      <section className='products'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToBasket={handleAddToBasket}
          />
        ))}
      </section>
    </main>
  )
}

export default Shop;