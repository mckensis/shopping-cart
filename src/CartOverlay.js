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

  const BasketTotal = () => {
    return cart.reduce((total, item) => 
      { return Number(total + (item.quantity * item.product.price)); }, 0)
  }

  const DeliveryTotal = () => {
    if (BasketTotal() > 25) return 0.00;
    return Number(5);
  }

  const Total = () => {
    return BasketTotal() + DeliveryTotal();
  }

  return (
    <>
    {cartOverlayVisibility && <>
        <div className="overlay" onClick={() => handleHideCart()}>
        </div>
        <aside>
          <section className="top-section">
            <button className="close" onClick={() => handleHideCart()}>X</button>
            <h3>Cart Summary</h3>
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
            <hr />
          <section className="costs">
            <p>Subtotal<span>£{BasketTotal().toFixed(2)}</span></p>
            <p>Delivery<span>£{DeliveryTotal().toFixed(2)}</span></p>
            <p className="subtitle">(Free Delivery on orders over £30)</p>
            <p className="total">Total <span>£{Total().toFixed(2)}</span></p>
          </section>
          <hr />
            <Link to="/checkout" onClick={() => handleHideCart()} className="big-link">Continue to Checkout</Link>
          </>}
        </aside>
      </>
    }
    </>
  )
}

export default CartOverlay;