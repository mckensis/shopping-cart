import { useContext } from "react";
import { BsTrash3 } from "react-icons/bs";
import StoreContext from "../context/StoreContext";

const Product = ({ product }) => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseItemCount
  } = useContext(StoreContext);

  // The 'add to cart' or edit quantity buttons for each product
  const ProductButtons = () => {
    const found = cart.find(cartItem => cartItem.product.id === product.id);
    if (found) {
        // If the item is in the cart return buttons to update the quantity of the product in the cart
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
        // If the item is not in the cart return a button to add the product to the cart
        return (
          <button type="button" className="add" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        )
      }
  }

  return (
    <article className='product'>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.common} />
      </div>
      <ul>
        <li>{product.common}</li>
        <li>{product.name}</li>
        <li>£{product.price}</li>
      </ul>
      {ProductButtons()}
    </article>
  )
}

export default Product;