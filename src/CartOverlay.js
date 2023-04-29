import { useContext } from "react";
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
          <button className="close" onClick={() => handleHideCart()}>X</button>
          <h3>Shopping Cart Summary</h3>
          
          {cart.length === 0 && 
            <section className="empty">
              <h4>Your shopping cart is empty!</h4>
            </section>
          }

          {cart.length > 0 && <>
          <section className="cart-items">
            {cart.map((item, index) => (
              <article className="cart-item" key={item.product.id}>
                <img className="thumbnail" src={item.product.image} alt="" />
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
                Math.round((
                  cart.reduce((total, item) => 
                    { return total + (item.quantity * item.product.price); }, 0)
                + Number.EPSILON) * 100) / 100
              }
            </p>
            <a href="/checkout" className="big-link">Continue to Checkout</a>
          </>}
        </aside>
      </>
    }
    </>
  )
}

export default CartOverlay;