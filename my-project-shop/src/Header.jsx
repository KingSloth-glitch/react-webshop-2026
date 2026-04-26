import { Link } from 'react-router-dom';
import logo from './assets/dummycorp.png';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/cart">Kundvagn</Link>
      </nav>
    </header>
  );
};

export default Header;
