import logo from './assets/dummycorp.png';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav></nav>
    </header>
  );
};

export default Header;
