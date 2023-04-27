import { useContext } from 'react';
import StoreContext from './StoreContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  const { cart, setCartOverlayVisibility } = useContext(StoreContext);

  return (
    <header>
      <a href='/' className='title'>Planty</a>
      <nav>
        <ul>
          <li><a href='shop'>Shop</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
      <div className='basket' onClick={() => setCartOverlayVisibility(true)}>
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