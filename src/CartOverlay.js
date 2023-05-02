import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "./StoreContext";
import { BsTrash3 } from "react-icons/bs";

const CartOverlay = () => {
  const { 
    cart, 
    cartOverlayVisibility, 
    handleHideCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseItemCount
  } = useContext(StoreContext);

  return (
    <>
    {cartOverlayVisibility && <>
        <div className="overlay" onClick={() => handleHideCart()}>
        </div>
        <aside>
          <section className="top-section">
            <button className="close" onClick={() => handleHideCart()}>X</button>
            <h3>Shopping Cart Summary</h3>
          </section>
          
          {cart.length === 0 && 
            <section className="empty">
              <h4>Your shopping cart is empty!</h4>
            </section>
          }

          {cart.length > 0 && <>
          <section className="cart-items">
            {cart.map((item, index) => (
              <article className="cart-item" key={item.product.id}>
                <img className="thumbnail" src={process.env.PUBLIC_URL + item.product.image} alt="" />
                <ul>
                  <li key={item.product.name}>{item.product.name}</li>
                  <li key={item.quantity}>£{(item.quantity * item.product.price).toFixed(2)}</li>
                  <li key={item.product.description}>{item.product.description}</li>
                </ul>
                  <div className="cart-item-bottom-container">
                    <BsTrash3 onClick={() => handleRemoveFromCart(item) }/>
                    <button type="button" className="quantity" onClick={() => handleDecreaseItemCount(item.product)}>-</button>
                    <p className="quantity">{item.quantity}</p>
                    <button type="button" className="quantity" onClick={() => handleAddToCart(item.product)}>+</button>
                  </div>
              </article>
            ))}
          </section>
            <p className="subtotal">
              Subtotal: £
              {
                (
                  cart.reduce((total, item) => 
                    { return total + (item.quantity * item.product.price); }, 0).toFixed(2)
                )
              }
            </p>
            <Link to="/checkout" onClick={() => handleHideCart()} className="big-link">Continue to Checkout</Link>
          </>}
        </aside>
      </>
    }
    </>
  )
}

export default CartOverlay;