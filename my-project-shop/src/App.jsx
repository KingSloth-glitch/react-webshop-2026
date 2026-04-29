import { useState } from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import './css/App.css';
import './css/display.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
