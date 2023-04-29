import { useContext } from "react";
import StoreContext from "./StoreContext";

const Checkout = () => {
  const { cart } = useContext(StoreContext);

  return (
    <main>
      <section className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <article>
            <h3>{item.product.common} x{item.quantity}</h3>
            <p>£{item.product.price}</p>
          </article>
        ))}
        <p className="subtotal">
          Subtotal: £
          {
            Math.round((
              cart.reduce((total, item) => 
                { return total + (item.quantity * item.product.price); }, 0)
            + Number.EPSILON) * 100) / 100
          }
        </p>
        <a className="big-link" href="/checkout">Confirm Order</a>
      </section>  
    </main>
  )
}

export default Checkout;