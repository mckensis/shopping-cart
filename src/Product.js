import { useContext } from "react";
import StoreContext from "./StoreContext";

const Product = ({ product, handleAddToBasket, handleRemoveFromBasket }) => {
  const { cart } = useContext(StoreContext);

  const ProductButtons = () => {
    const found = cart.find(cartItem => cartItem.product.id === product.id);
      if (found) {
        return (
          <section>
            <button type="button" onClick={() => handleRemoveFromBasket(product)}>-</button>
            <p>{found.quantity}</p>
            <button onClick={() => handleAddToBasket(product)}>+</button>
          </section>
        )
      }
      if (!found) {
        return (
          <button type='button' onClick={() => handleAddToBasket(product)}>Add to Basket</button>
        )
      }
  }

  return (
    <article className='product'>
      <div className="image-container">
        <img src={product.image} alt='' />
      </div>
      <h3>{product.name}</h3>
      <h4>£{product.price}</h4>
      <p>{product.description}</p>
      {ProductButtons()}
    </article>
  )
}

export default Product;