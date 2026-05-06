import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import logo from './assets/dummycorp2.png';
const Header = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Dummy Corp: We own everything!</h2>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/cart" className="Cart-Link">
          🛒 Kundvagn ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
