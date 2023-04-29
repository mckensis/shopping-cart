import { useContext } from "react";
import StoreContext from "./StoreContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(StoreContext);

  return (
    <main>
      <section className="order-summary">
        <h2>Order Summary</h2>
        {cart.length > 0 && <>
        {cart.map((item) => (
          <article>
            <h3>{item.product.common} x{item.quantity}</h3>
            <p>£{item.product.price}</p>
          </article>
        ))}
        <p className="subtotal">
          Subtotal: £
          {
            (
              cart.reduce((total, item) => 
              { return total + (item.quantity * item.product.price); }, 0).toFixed(2)
              )
          }
        </p>
        <a className="big-link" href="/checkout">Confirm Order</a>
        </>}

        {cart.length === 0 &&
          <section className="empty">
            <h4>Your shopping cart is empty!</h4>
            <Link className="big-link" to="/shop">Return to shop</Link>
          </section>
        }
      </section>  
    </main>
  )
}

export default Checkout;