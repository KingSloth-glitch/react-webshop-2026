import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProduceSection from './ProduceSection';
import SelfCheckout from './SelfChecout';
import './css/App.css';
import './css/display.css';
import './css/produce.css';
import './css/trolly.css';
import './css/kassa.css';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProduceSection />} />
        <Route path="/checkout" element={<SelfCheckout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
