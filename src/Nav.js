import { useContext } from 'react';
import StoreContext from './StoreContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  const { cart, handleShowCart } = useContext(StoreContext);

  return (
    <header>
      <a href='/' className='title'>
        Planty
        <img className="icon" src="./images/icon.png" alt=""/>
      </a>
      <nav>
        <ul>
          <li><a href='shop'>Shop</a></li>
          <li><a href='/contact'>Contact</a></li>
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