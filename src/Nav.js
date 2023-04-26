import { useContext } from "react";
import StoreContext from "./StoreContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  const { basket } = useContext(StoreContext);

  return (
    <header>
      <a href="/" className="title">Shop Title</a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="basket">
        <AiOutlineShoppingCart />
        {basket.length > 0
          &&
            <span>
              {basket.reduce((total, item) => { return total + item.quantity; }, 0)}
            </span>
        }
      </div>
    </header>
  )
}

export default Nav;