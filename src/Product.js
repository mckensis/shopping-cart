import { useContext } from "react";
import StoreContext from "./StoreContext";
import { BsTrash3 } from "react-icons/bs";

const Product = ({ product }) => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseItemCount
  } = useContext(StoreContext);

  const ProductButtons = () => {
    const found = cart.find(cartItem => cartItem.product.id === product.id);
      if (found) {
        return (
          <section>
            <BsTrash3 onClick={() => handleRemoveFromCart(found)} pointerEvents="bounding-box"/>
            <button className="modify" type="button" onClick={() => handleDecreaseItemCount(product)}>-</button>
            <p>{found.quantity}</p>
            <button className="modify" type="button" onClick={() => handleAddToCart(product)}>+</button>
          </section>
        )
      }
      if (!found) {
        return (
          <button type="button" className="add" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        )
      }
  }

  return (
    <article className='product'>
      <div className="image-container">
        <img src={product.image} alt='' />
      </div>
      <ul>
        <h3>{product.name}</h3>
        <p>£{product.price.toFixed(2)}</p>
      </ul>
      <p>{product.description}</p>
      {ProductButtons()}
    </article>
  )
}

export default Product;