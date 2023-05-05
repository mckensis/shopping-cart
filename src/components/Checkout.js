import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";

const Checkout = () => {
  const { 
    cart,
    returnCartCost,
    returnDeliveryCost,
    returnTotalCost 
  } = useContext(StoreContext);

  return (
    <main>
      <section className="container">
        <section className="order-summary">
          <h2>Order Summary</h2>
          
          {cart.length > 0 && <>
            {cart.map((item) => (
              <article key={item.product.id}>
                <h3>{item.product.common} x{item.quantity}</h3>
                <p>£{item.product.price}</p>
              </article>
            ))}
            <hr />
            <section className="totals">
              <p>Subtotal <span>£{returnCartCost()}</span></p>
              <p>Delivery <span>£{returnDeliveryCost()}</span></p>
              <p className="total">Total <span>£{returnTotalCost()}</span></p>
            </section>
            <hr />
            <Link className="big-link" to="/checkout">Confirm Order</Link>
          </>}

          {cart.length === 0 &&
            <section className="empty">
              <h4>Your shopping cart is empty!</h4>
              <Link className="big-link" to="/shop">Return to shop</Link>
            </section>
          }
          
        </section>
      </section>  
    </main>
  )
}

export default Checkout;