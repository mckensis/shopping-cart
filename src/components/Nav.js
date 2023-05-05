import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import plantIcon from '../images/icon.png';
import StoreContext from '../context/StoreContext';

const Nav = () => {
  const { 
    cart,
    returnTotalItemsInCart,
    handleShowCart 
  } = useContext(StoreContext);

  return (
    <header>

      <Link to="/" className='title'>
        Planty
        <img className="icon" src={plantIcon} alt=""/>
      </Link>
      
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <div className='basket' onClick={() => handleShowCart()}>
        <AiOutlineShoppingCart />
        {cart.length > 0 && <span>{returnTotalItemsInCart()}</span>}
      </div>

    </header>
  )
}

export default Nav;