import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from './StoreContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Icon from "./images/icon.png";

const Nav = () => {
  const { cart, handleShowCart } = useContext(StoreContext);

  return (
    <header>
      <Link to="/" className='title'>
        Planty
        <img className="icon" src={Icon} alt=""/>
      </Link>
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className='basket' onClick={() => handleShowCart()}>
        <AiOutlineShoppingCart />
        {cart.length > 0
          &&
            <span>
              {cart.reduce((total, item) => { return total + item.quantity; }, 0)}
            </span>
        }
      </div>
    </header>
  )
}

export default Nav;