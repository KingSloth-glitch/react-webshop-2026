import { Link } from 'react-router-dom';
import logo from './assets/dummycorp2.png';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Dummy Corp: We own everything!</h2>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/cart" className="Cart-Link">
          🛒 Kundvagn
        </Link>
      </nav>
    </header>
  );
};

export default Header;
