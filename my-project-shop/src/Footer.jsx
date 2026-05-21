import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Dummy Corp</h3>
        <p>We own everything</p>

        <div className="footer-links">
          <Link to="/">Hem</Link>
          <Link to="/cart">Kundvagn</Link>
          <Link to="/checkout">Kassa</Link>
        </div>

        <p className="copyright">
          &copy; 2077 Dummy Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
