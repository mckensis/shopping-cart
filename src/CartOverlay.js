import { useContext } from "react";
import StoreContext from "./StoreContext";

const CartOverlay = () => {
  const { cart, cartOverlayVisibility, setCartOverlayVisibility } = useContext(StoreContext);

  return (
    <>
    {cartOverlayVisibility && <>
        <div className="overlay" onClick={() => setCartOverlayVisibility(false)}>
        </div>
        <aside>
          <button className="close" onClick={() => setCartOverlayVisibility(false)}>X</button>
          <h3>Shopping Cart Summary</h3>
          {cart.length === 0 && 
            <section>
              <h4>Your shopping cart is empty!</h4>
            </section>
          }
          {cart.length > 0 && <>
          <section className="cart-items">
            {cart.map((item, index) => (
              <>
              <article className="cart-item" key={item.product.id}>
                <img className="thumbnail" src={item.product.image} alt="" />
                <ul>
                  <li>{item.product.name}</li>
                  <li>Price: £{item.product.price}</li>
                  <li>Quantity: {item.quantity}</li>
                  <li>Total Cost: £{item.quantity * item.product.price}</li>
                </ul>
              </article>
              {index !== cart.length -1 && <hr/>}
              </>
            ))}
          </section>
            <p className="subtotal">Subtotal: £{cart.reduce((total, item) => { return total + (item.quantity * item.product.price); }, 0)}</p>
            <a href="/cart" className="big-link">Checkout</a>
          </>}
          <a href="/shop" className="big-link">Shop</a>
        </aside>
      </>
    }
    </>
  )
}

export default CartOverlay;